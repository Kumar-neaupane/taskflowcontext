import { BellRing, ChevronDown, ClipboardCheck, Menu } from "lucide-react";
import Search from "../Search";
import userImg from "../../assets/images/user.jpg";
import { useEffect, useRef, useState } from "react";
import Notificationcard from "./Notificationcard";
import { useAuth } from "../../context/UserSlice";
import type { iUserContextType } from "../../types/interfaces";
import { useNavigate } from "react-router-dom";
type PopupType = "profile" | "notification" | boolean;

interface TopbarProps {
  onToggleSidebar: () => void;
}

const Topbar = ({ onToggleSidebar }: TopbarProps) => {
  const { loginUser, logout } = useAuth() as iUserContextType;
  const navigate = useNavigate();
  const [popUp, setPopup] = useState<PopupType>(false);
  // console.log(popUp);
  const profileRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      // console.log(e);
      if (
        notificationRef.current &&
        notificationRef.current.contains(e.target as Node)
      )
        return;

      if (profileRef.current && profileRef.current.contains(e.target as Node))
        return;

      setPopup(false);
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // console.log(profileRef.current, popUp);

  return (
    <div className="bg-white p-2 md:px-6 shadow-md flex items-center border-b sticky top-0 h-16 border-gray-300 z-30">
      <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
        <button
          onClick={onToggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg lg:hidden"
        >
          <Menu size={24} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-2">
          <ClipboardCheck
            size={32}
            className="bg-indigo-600 p-1.5 rounded-lg text-white md:size-10 md:p-2"
          />
          <h1 className="text-lg md:text-2xl font-bold text-indigo-900">TaskFlow</h1>
        </div>
      </div>

      <div className="flex justify-end lg:justify-between items-center flex-1 px-4">
        <div className="hidden md:block flex-1 max-w-md">
          <Search className="w-full" />
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div
            id="notification"
            ref={notificationRef}
            onClick={() => {
              !popUp || popUp == "profile"
                ? setPopup("notification")
                : setPopup(false);
            }}
            className="relative cursor-pointer p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center border-2 border-white">
              2
            </span>

            <BellRing size={22} className="text-gray-600" />

            {popUp === "notification" && (
              <div className="absolute top-full right-0 mt-4 animate-scaleIn">
                <Notificationcard />
              </div>
            )}
          </div>

          <div className="relative">
            <div
              ref={profileRef}
              className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded-lg transition-colors border border-transparent hover:border-gray-200"
              id="profile"
              onClick={() => {
                !popUp || popUp == "notification"
                  ? setPopup("profile")
                  : setPopup(false);
              }}
            >
              <div className="rounded-full w-8 h-8 md:w-10 md:h-10 overflow-hidden border border-gray-200">
                <img
                  src={userImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <ChevronDown size={16} className="text-gray-500 hidden sm:block" />
            </div>

            {popUp === "profile" && (
              <div className="absolute right-0 top-full mt-4 w-56 bg-white shadow-2xl border border-gray-100 rounded-xl p-4 flex flex-col gap-2 z-50 animate-scaleIn">
                <div className="pb-2">
                  <h1 className="font-bold text-sm text-gray-900">{loginUser?.name || "User"}</h1>
                  <p className="text-xs text-gray-500 truncate">{loginUser?.email || ""}</p>
                </div>

                <hr className="border-gray-100" />

                <div className="flex flex-col gap-1 py-1">
                  <span className="px-2 py-1.5 rounded-md cursor-pointer text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Profile Settings
                  </span>
                  <span className="px-2 py-1.5 rounded-md cursor-pointer text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Account Settings
                  </span>
                  <span className="px-2 py-1.5 rounded-md cursor-pointer text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                    Preferences
                  </span>
                </div>

                <hr className="border-gray-100" />

                <button
                  className="mt-1 w-full text-left px-2 py-1.5 rounded-md text-sm text-red-500 font-semibold hover:bg-red-50 transition-colors flex items-center"
                  onClick={() => { logout(); navigate("/"); }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
