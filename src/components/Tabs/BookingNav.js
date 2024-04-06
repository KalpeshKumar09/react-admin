import React from "react";
import { Link } from "react-router-dom";

const BookingNav = () => {
  return (
    <div className="absolute px-20 py-8">
      <div className="flex gap-5 justify-between items-center py-2 text-md rounded-lg border border-solid border-slate-300 text-zinc-700 max-md:flex-wrap">
        <Link to="/BookingTab/Booking" className="flex-auto self-stretch my-auto">
          All Booking
        </Link>
        <Link to="/" className="flex-auto self-stretch my-auto">
          Vet Booking
        </Link>
      </div>
    </div>
  );
};

export default BookingNav;
