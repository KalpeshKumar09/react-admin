import React from "react";
import { Outlet } from "react-router-dom";
import BookingNav from "./BookingNav";

const Bookings = () => {
  return (
    <div>
      <BookingNav />
      <Outlet />
    </div>
  );
};

export default Bookings;
