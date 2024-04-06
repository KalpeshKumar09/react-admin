import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  let { pathname } = useLocation();
  let subbase = pathname.split("/")?.[1] || "Dashboard";

  function Lankness(type = null) {
    let classes = "px-4 py-2 rounded inline-flex ";

    if (type === subbase) {
      classes += "bg-red text-white no-underline  text-center";
    } else {
      classes += "";
    }

    return classes;
  }

  return (
    <nav className="flex items-center justify-between px-0 h-20">
      <div className="absolute top-0 left-0 w-full flex flex-col gap-6 shadow-md items-center text-lg lg:static lg:flex-row lg:justify-between md:flex-row md:justify-between sm:flex-row sm:justify-between">
        <ul className="flex flex-col items-center gap-6 lg:flex-row lg:gap-40 md:flex-row md:gap-20 sm:flex-row sm:gap-8">
          <li>
            <Link to="/Home" className={Lankness("Home")}>
              Dashboard
            </Link>
          </li>

          <li>
            <Link to="/Users" className={Lankness("Users")}>
              Users
            </Link>
          </li>
          <li>
            <Link to="/Booking" className={Lankness("Booking")}>
              Bookings
            </Link>
          </li>
          <li>
            <Link to="/" className={Lankness("Products")}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/" className={Lankness("Orders")}>
              Orders
            </Link>
          </li>
        </ul>

        <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 md:flex-row md:gap-8 sm:flex-row sm:gap-8">
          <span
            to="/Notification"
            className="text-2xl object-cover cursor-pointer"
          >
            <IoIosNotificationsOutline />
          </span>
          <div className="flex items-center justify-center p-3">
            <div className="relative inline-block text-left dropdown">
              <span className="rounded-md shadow-lg">
                <button
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                  type="button"
                >
                  <span className="text-2xl">
                    <CgProfile />
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
                      tabIndex="2"
                      className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-black-700 cursor-pointer"
                    >
                      Profile
                    </Link>
                    <Link
                      tabIndex="2"
                      className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer"
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


