import { Bell, Briefcase, Shield, User } from "lucide-react";
import { Link, Outlet } from "react-router";

const SettingLayout = () => {
  return (
    <div className="w-full p-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Settings</h1>
        <p className="text-gray-500">
          Manage your account settings and preferences
        </p>
      </div>
      <div className="flex gap-8 ">

        <div className="w-1/4 bg-white border border-gray-300 shadow-lg rounded-lg p-4 flex flex-col gap-4 h-fit">
          <Link to={"setting"} >
            <div className="flex items-center gap-2 cursor-pointer">
              <User size={20} />
              <h1>Profile</h1>
            </div></Link>
          <Link to={"account"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Shield size={20} />
              <h1>Account</h1>
            </div></Link>
          <Link to={'notification'}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Bell size={20} />
              <h1>Notification</h1>
            </div></Link>
          <Link to={"preferences"}>
            <div className="flex items-center gap-2 cursor-pointer">
              <Briefcase size={20} />
              <h1>Preferences</h1>
            </div></Link>
        </div>
        <div className="flex-1">
          <Outlet />
        </div>

      </div>
    </div>
  );
};
export default SettingLayout;