import {
  ChartColumnIncreasing,
  ClipboardCheck,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  Users,
} from "lucide-react";

import Button from "../components/Button";
import Input from "../components/Input";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import type { iUserContextType } from "../types/interfaces";
import { useAuth } from "../context/UserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useAuth() as iUserContextType;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email) === false) {
      console.log("Invalid email format");
      //  const emailerr = "Invalid email format";
      return;
    }
    if (password.length < 6) {
      console.log("Password must be at least 6 characters long");
      return;
    }
    if (confirmPassword !== password) {
      console.log("Passwords do not match");
    }
    try {
      await register({ email, password, name, role });
      setMessage("Registration successful!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col xl:flex-row flex-col sm:w-full h-screen ">
      <div className="left lg:w-1/2 md:w-1/2 sm:w-full xl:w-full w-full bg-linear-to-r from-indigo-700 to-purple-500 h-screen  flex flex-col justify-center items-center gap-6 text-white p-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl text-center">Join TaskFlow today</h1>
          <p className="text-xl">
            Create an account and start managing your projects more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white/15 backdrop-blur-sm flex flex-row justify-center gap-8 items-center p-6 rounded-lg">
            <div>
              <Users className="" />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Team Collaboration</h1>
              <p>Work together seamlessly</p>
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm flex flex-row justify-center gap-8 items-center p-6 rounded-lg">
            <div>
              {" "}
              <ChartColumnIncreasing />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Team Collaboration</h1>
              <p>Work together seamlessly</p>
            </div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm flex flex-row justify-center gap-8 items-center p-6 rounded-lg">
            <div>
              {" "}
              <LockKeyhole />
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Team Collaboration</h1>
              <p>Work together seamlessly</p>
            </div>
          </div>
        </div>
      </div>
      <div className="right lg:w-1/2 md:w-1/2 sm:w-full xl:w-full w-full bg-white h-screen  flex flex-col justify-center items-center gap-6 text-black lg:p-8 md:p-6 sm:p-4 p-2 pt-4">
        <div className="flex items-baseline flex-col justify-baseline gap-6 lg:w-2/4 md:w-2/4 ">
          <div className="flex flex-row gap-4 text-black ">
            <ClipboardCheck
              color="white"
              className="bg-indigo-500 p-2 rounded-lg"
              size={48}
            />
            <h1 className="text-4xl font-bold title">TaskFlow</h1>
          </div>
          <h1 className="text-black otherfont text-3xl font-extrabold">
            Create an account
          </h1>
          <p className="text-black otherfont text-2xl">
            Get started with your free account
          </p>
        </div>
        <form
          onSubmit={handleRegister}
          className="inputs lg:w-2/4 md:w-2/4 sm:w-full xl:w-2/4 w-full flex flex-col gap-4"
        >
          <div className="w-full otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Enter your Name:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold  outline-0 "
                type="text"
                id="name"
                onChange={(e: any) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
            </div>
            <p></p>
          </div>
          <div className="w-full otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Enter your Email:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold outline-0 "
                type="email"
                id="email"
                placeholder="Enter Your Email"
                onChange={(e: any) => setEmail(e.target.value)}
              />

              <Mail className="text-indigo-600 " />
              {/* <EyeOff /> */}
            </div>
            {/* ? <p className="text-red-500">{emailerr}</p> */}
          </div>
          <div className="w-full otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Select your Role:</label>

            <div className="flex bg-gray-300 rounded-lg items-center p-1 w-full">
              <Dropdown onChange={(e: any) => setRole(e.target.value)}>
                <option value="">Select role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="hr">HR</option>
              </Dropdown>
            </div>
          </div>

          <div className=" otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Enter your Password:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold  outline-0"
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter Your Password"
                onChange={(e: any) => setPassword(e.target.value)}
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
          <div className=" otherfont flex flex-col gap-1">
            <label className="text-black text-xl">Confirm Password:</label>
            <div className="flex flex-row bg-gray-300 rounded-lg items-center p-2 ">
              <Input
                className="w-full text-black font-bold  outline-0"
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Your Password"
                onChange={(e: any) => setConfirmPassword(e.target.value)}
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

          <div className="my-4">
            <Button name="Sign Up" className="w-full " />
          </div>
          <p className="text-green-500 text-center ">{message}</p>
          <div className="text-black flex items-center justify-center gap-1">
            Dont have an account?{" "}
            <span className="text-indigo-600 cursor-pointer underline">
              Sign Up
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
