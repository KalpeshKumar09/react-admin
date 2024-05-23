import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { useAuth } from "../../Routes/AuthContext";
import clsx from "clsx";

const Navbar = () => {
  const { pathname } = useLocation();
  const subbase = pathname.split("/")?.[1] || "Dashboard";

  const [isSideMenuOpen, setMenu] = useState(false);
  const sideMenuRef = useRef(null);

  const { isAuthenticated, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/Login");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sideMenuRef.current && !sideMenuRef.current.contains(event.target)) {
        setMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navlinks = [
    { label: "Dashboard", to: "/Home" },
    { label: "Users", to: "/Users" },
    { label: "Bookings", to: "/Bookings" },
    { label: "Products", to: "/Products" },
    { label: "Orders", to: "/Orders" },
  ];

  const Lankness = (type = null) => {
    let classes = "px-4 py-2 rounded inline-flex ";
    if (type === subbase) {
      classes += "bg-red text-white no-underline text-center";
    }
    return classes;
  };

  return (
    <>
      {isAuthenticated && (
        <>
          <nav className="flex justify-between px-8 items-center py-6">
            <div className="flex items-center gap-8">
              <CiMenuBurger
                onClick={() => setMenu(true)}
                className="text-3xl cursor-pointer lg:hidden"
              />
              {navlinks.map((d, i) => (
                <Link
                  key={i}
                  className={`hidden lg:block text-gray-600  ${Lankness(
                    d.to.split("/")[1]
                  )}`}
                  to={d.to}
                >
                  {d.label}
                </Link>
              ))}
            </div>

            <div
              className={clsx(
                "fixed h-full w-screen lg:hidden top-0 right-0 -translate-x-full transition-all",
                isSideMenuOpen && "translate-x-0"
              )}
              ref={sideMenuRef}
              onClick={() => setMenu(false)}
            >
              <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-4 gap-8 z-50 w-56 flex border-r-2 border-black">
                <div className="flex flex-col gap-4 px-6 py-6">
                  {navlinks.map((d, i) => (
                    <Link key={i} to={d.to} className="font-normal">
                      {d.label}
                    </Link>
                  ))}
                </div>
                <Link className="font-normal px-6 py-6" onClick={handleLogout}>
                  Logout
                </Link>
              </section>
            </div>

            <section className="flex items-center gap-4">
              <div className="text-left dropdown">
                <span className="rounded-md ">
                  <button
                    className="flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-800"
                    type="button"
                  >
                    <span className="">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_2_186)">
                          <path
                            d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64Z"
                            fill="#E8EBF3"
                          />
                          <path
                            d="M32 29.091C36.2843 29.091 39.7576 25.6177 39.7576 21.3334C39.7576 17.049 36.2843 13.5758 32 13.5758C27.7157 13.5758 24.2424 17.049 24.2424 21.3334C24.2424 25.6177 27.7157 29.091 32 29.091Z"
                            fill="#6C63FF"
                            stroke="#6C63FF"
                            stroke-width="1.27273"
                          />
                          <path
                            d="M18.9416 53.3334H45.0793C48.6846 53.3334 50.4242 52.3028 50.4242 50.07C50.4242 44.8412 43.2558 37.8182 32 37.8182C20.7441 37.8182 13.5757 44.8412 13.5757 50.07C13.5757 52.3028 15.3155 53.3334 18.9416 53.3334Z"
                            fill="#6C63FF"
                            stroke="#6C63FF"
                            stroke-width="1.27273"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2_186">
                            <rect width="64" height="64" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </button>
                </span>
                <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                  <div
                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
                    role="menu"
                  >
                    <div className="py-1">
                      <Link
                        to="/Profiles"
                        tabIndex="2"
                        className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-black-700 cursor-pointer"
                      >
                        Profile
                      </Link>
                      <Link
                        onClick={handleLogout}
                        tabIndex="2"
                        className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </nav>
        </>
      )}
    </>
  );
};

export default Navbar;
