import { Camera } from "lucide-react";
import profileImg from '../assets/images/user1.jpg'
import Button from "../components/Button";
import Input from "../components/Input";
import { useAuth } from "../context/UserSlice";
import type { iUserContextType } from "../types/interfaces";

const Setting = () => {
  const { loginUser } = useAuth() as iUserContextType;

  // Split the name into first/last for display
  const nameParts = (loginUser?.name || "").split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 my-4">
        <div className="bg-white border border-gray-300 rounded-lg  shadow-lg w-full p-4">
          <h1 className="text-[18] font-bold  pb-2">Profile Information</h1>
          <div className="flex flex-row gap-2 items-center">
            <img src={profileImg} className="w-18 h-18 object-cover rounded-full" />
            <div className="">
              <input type="file" id="fileupload" className="file hidden" />
              <label htmlFor="fileupload" className="border border-gray-300 p-2 rounded-lg bg-white flex flex-row gap-1 w-fit my-4"><Camera /> <p>Choose a photo</p></label>
            </div>
            <div className="text-red-500 text-[18] font-bold hover:bg-red-200 p-2 rounded-lg transition delay-100 cursor-pointer">
              Remove
            </div>
          </div>
          <div>
            <div className="flex flex-row gap-4 w-full mt-6">
              <div className="flex flex-col gap-1 w-full">
                <label>First Name</label>
                <Input className="border border-gray-300 p-1 rounded-lg outline-0 hover:border-indigo-500 transition delay-100" placeholder="First Name" value={firstName} readOnly />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <label>Last Name</label>
                <Input className="border border-gray-300 p-1 rounded-lg outline-0 hover:border-indigo-500 transition delay-100" placeholder="Last Name" value={lastName} readOnly />
              </div>
            </div>
            <div className="flex flex-col gap-1 w-full mt-4">
              <label>Email</label>
              <Input className="border border-gray-300 p-1 rounded-lg outline-0 hover:border-indigo-500 transition delay-100" placeholder="Enter Your Email" value={loginUser?.email || ""} readOnly />
            </div>
            <div className="flex flex-col gap-1 w-full mt-4">
              <label>Role</label>
              <Input className="border border-gray-300 p-1 rounded-lg outline-0 hover:border-indigo-500 transition delay-100" placeholder="Your role" value={loginUser?.role || ""} readOnly />
            </div>
            <div className="mt-2">
              <label>Bio</label>
              <textarea className=" border w-full outline-0 border-gray-300 hover:border-indigo-500 rounded-lg p-2 " ></textarea>
            </div>
          </div>
          <div className="mt-2 flex justify-end">
            <Button name="Save Change" className="p-2" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;
