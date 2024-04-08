import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../components/Login/Login";
import Signup from "../components/Signup/Signup";
import Home from "../Pages/Home/Home";
import ProtectedRoute from "../Routes/ProtectedRoute";
import { UserAuthContextProvider } from "../context/UserAuthContext";
import Navbar from "../components/Navbar/Navbar";
import Users from "../components/Tabs/Users";
import User from "../Pages/Users/User";
import Partner from "../Pages/Users/Partner";
import Block from "../Pages/Users/Block";
import Booking from "../Pages/Booking/Booking";
import Bookings from "../components/Tabs/Bookings";
import VetBooking from "../Pages/Booking/VetBooking";

const MainRoute = () => {
  return (
    <>
      <UserAuthContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="Users"
              element={
                <ProtectedRoute>
                  <Users />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="User" />} />
              <Route path="User" element={<User />} />
              <Route path="Partner" element={<Partner />} />
              <Route path="Block" element={<Block />} />
            </Route>
            <Route
              path="Bookings"
              element={
                <ProtectedRoute>
                  <Bookings />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate replace to="Booking" />} />
              <Route path="Booking" element={<Booking />} />
              <Route path="VetBooking" element={<VetBooking />} />
            </Route>

            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </>
  );
};

export default MainRoute;
