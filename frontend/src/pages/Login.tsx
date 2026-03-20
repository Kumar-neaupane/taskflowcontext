import { useState } from "react";
import { ClipboardCheck, Eye, EyeOff, Mail } from "lucide-react";
import Input from "../components/Input";
import Button from "../components/Button";
import Loginregcard from "../components/Loginregcard";
import { useAuth } from "../context/UserSlice";
import { type iUserContextType } from "../types/interfaces";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, setError, message, error } = useAuth() as iUserContextType;

  const navigate = useNavigate();


  const handleLogin = async (e: any) => {
    e.preventDefault();
    const data = e.target;
    const loginData = {
      email: data[0].value,
      password: data[1].value,
    };
    if (!loginData.email && !loginData.password) {
      setError("Invalid credentials");
      return;
    }
    try {
      const success = await login(loginData);
      if (success) {
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xl:flex-row flex-col sm:w-full h-screen">
      <div className="leftside flex flex-col justify-center items-center gap-4 lg:w-1/2 md:w-1/2 sm:w-full xl:w-full w-full bg-white h-screen lg:p-8 md:p-6 sm:p-4 p-2 pt-4">
        <div className="flex items-baseline flex-col justify-baseline gap-6 lg:w-2/4 md:w-2/4">
          <div className="flex flex-row gap-4 text-black ">
            <ClipboardCheck
              color="white"
              className="bg-indigo-500 p-2 rounded-lg"
              size={48}
            />
            <h1 className="text-4xl font-bold title">TaskFlow</h1>
          </div>
          <h1 className="text-black otherfont text-3xl font-extrabold">
            Welcome back
          </h1>
          <p className="text-black otherfont text-2xl">
            Sign in to your account to continue
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="inputs lg:w-2/4 md:w-2/4 sm:w-full xl:w-2/4 w-full flex flex-col gap-4"
        >
          <div className="w-full otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Enter your Email:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold outline-none  "
                type="email"
                id="email"
                placeholder="Enter Your Email"
              />
              <Mail className="text-indigo-600 " />
            </div>
          </div>
          <div className="w-full otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Enter your Password:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold outline-none  "
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password"
              />
              {showPassword ? (
                <EyeOff
                  className="text-indigo-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <Eye
                  className="text-indigo-600 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
          </div>
          <div className="flex flex-row justify-between w-full">
            <span className="text-black otherfont text-xl">
              <input type="checkbox" /> Remember me
            </span>
            <p className="text-indigo-600 otherfont text-xl font-black cursor-pointer">
              Forgot password?
            </p>
          </div>
          <div className="my-4">
            <Button name="Sign In" className="w-full " />
          </div>
          <p className={` ${message ? "text-green-500" : "text-red-500"} text-center`}>{message || error}</p>
          <div className="text-black flex items-center justify-center gap-1">
            Dont have an account?{" "}
            <span className="text-indigo-600 cursor-pointer underline">
              Sign Up
            </span>
          </div>
        </form>
      </div>
      <div className="right lg:w-1/2 md:w-1/2 sm:w-full xl:w-full w-full bg-linear-to-r from-indigo-700 to-purple-500 h-screen  flex flex-col justify-center items-center gap-6 text-white p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-center">Manage projects with ease</h1>
          <p className="text-xl">
            Streamline your workflow, collaborate with your team, and deliver
            projects on time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Loginregcard h1name="500+" desc="Active Projects" />
          <Loginregcard h1name="10k+" desc="Tasks Completed" />
          <Loginregcard h1name="50+" desc="Team Members" />
          <Loginregcard h1name="98%" desc="Success Rate" />
        </div>
      </div>
    </div>
  );
};

export default Login;
