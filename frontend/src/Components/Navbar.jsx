import { useState } from "react";
import { GrSearch } from "react-icons/gr";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-5 bg-white">
      <div className="container px-9 mx-auto relative">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to={"/"}>
              <h1 className="bg-gradient-to-r from-green-800 to-blue-600 text-transparent bg-clip-text text-4xl font-bold cursor-pointer ">
                GI PROJECT
              </h1>
            </Link>
          </div>
          <div className=" hidden lg:flex items-center w-full max-w-sm border rounded-full shadow-sm h-10">
            <input
              type="text"
              className="w-full outline-none pl-4 h-full rounded-l-full"
              placeholder="Search product here"
            />
            <div className="text-lg min-w-[50px] h-full bg-black flex items-center justify-center rounded-r-full cursor-pointer">
              <GrSearch className="text-white" />
            </div>
          </div>
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="font-bold cursor-pointer hover:text-gray-600 transition"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/Login"
              className="px-4 py-2 bg-gradient-to-r from-green-800 to-blue-900 text-white rounded-lg shadow"
            >
              Login
            </Link>
          </div>
          <div className="lg:hidden flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={toggleNavbar}
          >
            <div
              className="fixed right-0 z-50 bg-white w-3/4 h-full p-12 flex flex-col justify-center items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button className="self-end mb-6" onClick={toggleNavbar}>
                <X className="text-white" />
              </button>
              <div className="flex items-center w-full mb-8 border rounded-full shadow-sm h-10">
                <input
                  type="text"
                  className="w-full outline-none pl-4 h-full rounded-l-full"
                  placeholder="Search product here"
                />
                <div className="text-lg min-w-[50px] h-full bg-black flex items-center justify-center rounded-r-full cursor-pointer">
                  <GrSearch className="text-white" />
                </div>
              </div>
              <ul className="space-y-6 text-black">
                {navItems.map((item, index) => (
                  <li key={index} className="text-lg">
                    <Link to={item.href} onClick={toggleNavbar}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-6 mt-12">
                <Link
                  to="/Login"
                  className="py-2 px-4 bg-gradient-to-r from-green-800 to-blue-900 text-white rounded-lg shadow"
                  onClick={toggleNavbar}
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
