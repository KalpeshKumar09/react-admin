import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

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

  const useAuth = () => {
    const user = localStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const user = useAuth();

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/Login");
  };

  return (
    <>
      {user && (
        <>
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
                  <Link to="/Bookings" className={Lankness("Booking")}>
                    Bookings
                  </Link>
                </li>
                <li>
                  <Link to="/Products" className={Lankness("Products")}>
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/Orders" className={Lankness("Orders")}>
                    Orders
                  </Link>
                </li>
              </ul>

              <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-8 md:flex-row md:gap-8 sm:flex-row sm:gap-8">
                <span
                  to="/Notification"
                  className="text-2xl object-cover cursor-pointer"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24 10.6666C24 8.54489 23.1571 6.51006 21.6569 5.00977C20.1566 3.50948 18.1217 2.66663 16 2.66663C13.8783 2.66663 11.8434 3.50948 10.3431 5.00977C8.84286 6.51006 8 8.54489 8 10.6666C8 20 4 22.6666 4 22.6666H28C28 22.6666 24 20 24 10.6666Z"
                      stroke="#404147"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3067 28C18.0723 28.4041 17.7358 28.7395 17.331 28.9727C16.9262 29.2059 16.4672 29.3286 16 29.3286C15.5329 29.3286 15.0739 29.2059 14.6691 28.9727C14.2642 28.7395 13.9278 28.4041 13.6934 28"
                      stroke="#404147"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
                <div className="flex items-center justify-center p-3">
                  <div className="relative inline-block text-left dropdown">
                    <span className="rounded-md ">
                      <button
                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out  rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue  active:text-gray-800"
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
                            onClick={logout}
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
        </>
      )}
    </>
  );
};

export default Navbar;
