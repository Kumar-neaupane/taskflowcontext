import { ClipboardCheck } from "lucide-react";
import { Link } from "react-router";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 shadow-lg items-center">
      <div className="flex flex-row gap-2">
        <ClipboardCheck
          size={38}
          color="white "
          className="bg-indigo-600 p-2 rounded-lg"
        />
        <h1 className="text-2xl font-bold">TaskFlow</h1>
      </div>
      <div className="flex flex-row gap-2">
        <Link to="/">
          <Button name="Login" className="px-4 hover:scale-105 transition duration-200 hover:transform cursor-pointer" />
        </Link>

        <Link to="/register">
          <Button name="Register" className="px-4 hover:scale-105 transition duiration-200 hover:transform cursor-pointer" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
