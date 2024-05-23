import React from "react";
import { Link, useLocation } from "react-router-dom";

const TabNav = () => {
  let { pathname } = useLocation();
  let subbase = pathname.split("/")?.[2] || "Normal Users";

  function Lankness(type = null) {
    let classes = "flex-auto self-stretch my-auto rounded px-2 py-1";

    if (type === subbase) {
      classes += " bg-yellow text-sky no-underline";
    }

    return classes;
  }
  return (
    <div className="px-20 py-8 md:py-2 md:px-6 md:text-center lg:py-8 lg:absolute sm:py-2  sm:text-center">
      <div className="flex gap-5 justify-between items-center py-2 px-6 text-md rounded-lg border border-solid border-slate-300 text-zinc-700 max-md:flex-wrap">
        <Link to="/Users/User" className={Lankness("User")}>
          Normal Users
        </Link>
        <Link to="/Users/Partner" className={Lankness("Partner")}>
          Partner Users
        </Link>
        <Link to="/Users/Block" className={Lankness("Block")}>
          Blocked Users
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
