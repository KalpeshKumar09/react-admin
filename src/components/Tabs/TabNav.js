/* import React from "react";
import './nav.css'
import { Link, NavLink } from "react-router-dom";

const TabNav = () => {
  return (
    <div className="absolute px-20 py-8">
      <div className="flex gap-5 justify-between items-center py-2 px-6 text-md rounded-lg border border-solid border-slate-300 text-zinc-700 max-md:flex-wrap">
        <NavLink to="/Users/User" className="flex-auto self-stretch my-auto" >
          Normal Users
        </NavLink>
        <Link to="/Users/Partner" className="flex-auto self-stretch my-auto">
          Partner User
        </Link>
        <Link to="/Users/Block" className="flex-auto self-stretch my-auto" >
          Blocked Users
        </Link>
      </div>
    </div>
  );
};

export default TabNav;
 */

import React from "react";
import './nav.css'
import { Link, useLocation } from "react-router-dom";

const TabNav = () => {
  let { pathname } = useLocation();
  let subbase = pathname.split("/")?.[2] || "Normal Users"; // Changed the index to 2

  function Lankness(type = null) {
    let classes = "flex-auto self-stretch my-auto rounded px-2 py-1";

    if (type === subbase) {
      classes += " bg-yellow text-sky no-underline"; // Added space before the class names
    }

    return classes;
  }
  return (
    <div className="absolute px-20 py-8">
      <div className="flex gap-5 justify-between items-center py-2 px-6 text-md rounded-lg border border-solid border-slate-300 text-zinc-700 max-md:flex-wrap">
        <Link to="/Users/User" className={Lankness("Normal Users")} >
          Normal Users
        </Link>
        <Link to="/Users/Partner" className={Lankness("Partner")}>
          Partner Users
        </Link>
        <Link to="/Users/Block" className={Lankness("Block")} >
          Blocked Users
        </Link>
      </div>
    </div>
  );
};

export default TabNav;

