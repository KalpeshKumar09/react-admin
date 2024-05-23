import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import PublicRoute from "./Routes/PublicRoute";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Users from "./components/Tabs/Users";
import User from "./Pages/Users/User";
import Partner from "./Pages/Users/Partner";
import Block from "./Pages/Users/Block";
import Booking from "./Pages/Booking/Booking";
import Bookings from "./components/Tabs/Bookings";
import VetBooking from "./Pages/Booking/VetBooking";
import { AuthProvider } from "./Routes/AuthContext";
import UserProfile from "./Pages/Profile/UserProfile";
import PartnerProfile from "./Pages/Profile/PartnerProfile";
import BookingProfile from "./Pages/Profile/BookingProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar />
          <Routes>
            <Route element={<PublicRoute />}>
              <Route path="/" element={<Login />} />
              <Route path="/Login" element={<Login />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/Home" element={<Home />} />
              <Route path="Users" element={<Users />}>
                <Route index element={<Navigate replace to="User" />} />
                <Route path="User" element={<User />} />
                <Route path="Partner" element={<Partner />} />
                <Route path="Block" element={<Block />} />
              </Route>
              <Route path="Bookings" element={<Bookings />}>
                <Route index element={<Navigate replace to="Booking" />} />
                <Route path="Booking" element={<Booking />} />
                <Route path="VetBooking" element={<VetBooking />} />
              </Route>
              <Route path="/UserProfile/:userId" element={<UserProfile />} />
              <Route
                path="/PartnerProfile/:userId"
                element={<PartnerProfile />}
              />
              <Route
                path="/BookingProfile/:userId"
                element={<BookingProfile />}
              />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
