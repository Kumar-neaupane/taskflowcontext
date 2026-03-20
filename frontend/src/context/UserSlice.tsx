import { createContext, useContext, useEffect, useState } from "react";
import { type iUserContextType, type iUser } from "../types/interfaces";

const UserContext = createContext<iUserContextType | null>(null);

export const UserProvider = ({ children }: any) => {
  const [loginUser, setLoginUser] = useState<iUser>({
    email: null,
    password: null,
  });
  const [user, setUser] = useState<iUser | any>([
    {
      email: "test@example.com",
      password: "password123",
      name: "Test User",
      role: "admin",
    },
  ]);

  // On mount: restore session & registered users
  useEffect(() => {
    // Restore registered users from sessionStorage
    const newUserData = sessionStorage.getItem("newUser");
    if (newUserData) {
      const data = JSON.parse(newUserData);
      setUser((prev: any) => {
        // Avoid duplicates
        const exists = prev.some((u: any) => u.email === data.email);
        return exists ? prev : [...prev, data];
      });
    }
  }, []);

  // Restore logged-in user session (runs after user list is set)
  useEffect(() => {
    const storedUser = sessionStorage.getItem("loginUser");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      // Validate that stored user actually exists in our user list
      const validUser = user.find(
        (u: any) => u.email === parsed.email && u.password === parsed.password
      );
      if (validUser) {
        setLoginUser(validUser);
      } else {
        // Invalid stored session — clear it
        sessionStorage.removeItem("loginUser");
        setLoginUser({ email: null, password: null });
      }
    }
  }, [user]);

  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const login = ({ email, password }: any): boolean => {
    // Clear previous messages
    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please enter email and password");
      return false;
    }

    const foundUser = user.find((e: any) => e.email === email);

    if (!foundUser) {
      setError("User not found");
      return false;
    }

    if (foundUser.password !== password) {
      setError("Incorrect password");
      return false;
    }

    // Both email and password match — login success
    setLoginUser(foundUser);
    setMessage("Login successful");
    sessionStorage.setItem("loginUser", JSON.stringify(foundUser));
    return true;
  };

  const register = ({ email, password, name, role }: any) => {
    const newUser = { email, password, name, role };
    setUser((prev: any) => [...prev, newUser]);
    sessionStorage.setItem("newUser", JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setLoginUser({ email: null, password: null });
    sessionStorage.removeItem("loginUser");
    setError("");
    setMessage("");
  };

  return (
    <UserContext.Provider
      value={
        {
          loginUser,
          user,
          login,
          register,
          error,
          message,
          setError,
          setMessage,
          logout,
        } as iUserContextType
      }
    >
      {children}
    </UserContext.Provider>
  );
};
export const useAuth = () => useContext(UserContext);
