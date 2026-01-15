import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

function UserMenu() {
  return (
    <div className="relative group">
      {/* Icon */}
      <div className="cursor-pointer flex items-center gap-1">
        <FaUser className="hover:text-yellow-400" />
      </div>

      {/* Dropdown */}
      <ul className="absolute right-0 mt-2 w-32 bg-[blue] border rounded-md shadow-lg 
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        <li>
          <Link
            to="/login"
            className="block px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="block px-4 py-2 rounded-md hover:bg-gray-500"
          >
            Sign Up
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserMenu;
