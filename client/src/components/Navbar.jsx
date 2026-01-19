import { Link, NavLink } from "react-router-dom";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useState } from "react";
import MegaDropdown from "./MegaDropdown";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showSearch, setShowSearch] = useState(false); // click ilə search
  const [openUser, setOpenUser] = useState(false);

  const dropdownLinks = [
    { title: "Kits", key: "kits", path: "/kits" },
    { title: "Training", key: "training", path: "/training" },
    { title: "Apparel", key: "apparel", path: "/apparel" },
    { title: "Memorabilia", key: "memorabilia", path: "/memorabilia" },
    { title: "Gifts and Accessories", key: "gifts", path: "/gifts" },
  ];

  return (
    <header 
      className="bg-[#0b0f2f] text-white relative z-[100]"
      onMouseLeave={() => setOpenMenu(null)}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-20">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"
            alt="Barcelona Logo"
            className="w-12 h-12"
          />
          <span className="font-bold text-xl tracking-tight leading-tight">
            BARÇA
            <span className="block text-[10px] font-normal uppercase tracking-widest">Official Store</span>
          </span>
        </NavLink>

        {/* NAV */}
        <nav className="hidden lg:flex h-full items-center gap-8 text-[13px] font-bold uppercase tracking-wider">
          <NavLink 
            to="/best-sellers" 
            className={({ isActive }) => `h-full flex items-center transition-colors duration-200`}
          >
            Best Sellers
          </NavLink>

          {dropdownLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.path}
              className={() => 
                `relative h-full flex items-center transition-colors duration-200 border-b-3 ${
                  openMenu === link.key
                    ? "border-yellow-400 text-white"
                    : "border-transparent text-gray-300 hover:text-yellow-400"
                }`
              }
              onMouseEnter={() => setOpenMenu(link.key)}
            >
              {link.title}
            </NavLink>
          ))}
        </nav>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6 relative">
       

          {/* SEARCH ICON */}
          <div className="relative">
            <FaSearch
              size={18}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <div className="absolute top-10 right-0 w-64 bg-[#0b0f2f] border border-gray-800 rounded shadow-lg p-2 z-[200]">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-3 py-2 text-sm bg-[#0f153d] text-white placeholder-gray-400 rounded outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            )}
          </div>

        
          <div className="relative">
            <FaUser
              size={18}
              className="cursor-pointer hover:text-yellow-400 transition-colors"
              onClick={() => setOpenUser(!openUser)}
            />

            {openUser && (
              <div className="absolute right-0 mt-2 w-40 bg-[#0b0f2f] border border-gray-700 rounded shadow-lg z-[200]">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition"
                  onClick={() => setOpenUser(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="block px-4 py-2 text-white hover:bg-yellow-400 hover:text-black transition"
                  onClick={() => setOpenUser(false)}
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

      
          <Link to="/basket" className="hover:text-yellow-400 transition-colors">
            <FaShoppingBag size={18} />
          </Link>
        </div>
      </div>

      {openMenu && (
        <div 
          className="absolute top-full left-0 w-full bg-[#0b0f2f] border-t border-gray-800 shadow-2xl"
          onMouseEnter={() => setOpenMenu(openMenu)}
        >
          <MegaDropdown type={openMenu} />
        </div>
      )}
    </header>
  );
};

export default Navbar;
