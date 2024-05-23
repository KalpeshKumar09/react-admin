import React from "react";
import { useState, useEffect } from "react";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchBookings();
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col items-center py-10 pr-2.5 pl-5 bg-white">
      <div className="mt-4 max-w-full w-[804px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-3 rounded-md border border-indigo-500 border-solid text-zinc-800 max-md:px-5 max-md:mt-10">
              <div className="justify-center px-2.5 py-2 text-2xl border-b border-solid border-zinc-800 max-md:px-7">
                Total Bookings
              </div>
              <div className="flex gap-1.5 self-center mt-7 whitespace-nowrap">
                <div className="grow text-2xl">500</div>
                <div className="flex flex-1 gap-0.5 my-auto text-base">
                  <MdArrowDropUp className="shrink-0 text-3xl aspect-square fill-green-600" />
                  <div>30%</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-3 rounded-md border border-indigo-500 border-solid shadow-sm text-zinc-800 max-md:px-5 max-md:mt-10">
              <div className="justify-center items-center px-2.5 py-2 text-2xl whitespace-nowrap border-b border-solid border-zinc-800 max-md:px-5">
                Revenue
              </div>
              <div className="flex gap-0.5 self-center mt-7">
                <div className="grow text-2xl">INR 40,000</div>
                <MdArrowDropUp className="shrink-0 text-3xl aspect-square fill-green-600" />
                <div className="my-auto text-base">30%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch mt-6 max-md:mt-10 max-md:max-w-full overflow-hidden">
        <div className="flex gap-2 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full md:flex md:flex-col">
            <div className="flex flex-col grow px-2 py-4 w-full bg-white rounded-md shadow-lg text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-lg">Recent Bookings</div>
                <Link
                  to=""
                  className="justify-center p-2.5 text-base rounded-md border border-solid border-zinc-700 max-md:px-5 cursor-pointer"
                >
                  View All
                </Link>
              </div>
              <div className="flex gap-2 justify-between mt-3 text-base font-medium max-md:flex-wrap max-md:max-w-full">
                <div>Booking Id</div>
                <div>Customer Name</div>
                <div>Service Booked</div>
                <div>Booking Time </div>
                <div>Status</div>
              </div>
              {bookings.slice(0, 7).map((booking) => (
                <div
                  key={booking.id}
                  className="flex gap-2 justify-between items-center text-center p-1 mt-1 text-md rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full"
                >
                  <p className="self-stretch my-auto">{booking.id}</p>
                  <p className="self-stretch my-auto">{booking.title}</p>
                  <p className="self-stretch my-auto">{booking.username}</p>
                  <p className="self-stretch my-auto">Grooming</p>
                  <p className="self-stretch my-auto">Feb 5, 2024</p>
                  <p className="justify-center self-stretch p-2.5 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                    Upcoming
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-3 pb-6 w-full bg-white rounded-md shadow-lg text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-lg">
                  New Partner Users
                </div>
                <Link
                  to=""
                  className="justify-center p-2.5 text-base rounded-md border border-solid border-zinc-700 max-md:px-5 cursor-pointer"
                >
                  View All
                </Link>
              </div>
              <div className="flex gap-5 justify-between mt-4 text-base font-medium whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                <div>Name</div>
                <div>Email</div>
                <div>Services</div>
                <div>Date</div>
              </div>
              {users.slice(0, 6).map((user) => (
                <div
                  key={user.id}
                  className="flex gap-5 justify-between p-2 mt-4 text-md rounded border-b border-solid border-slate-200 max-md:flex-wrap"
                >
                  <p className="text-sm">{user.name}</p>
                  <p className="text-sm">{user.email}</p>
                  <p className="text-sm">Grooming</p>
                  <p className="text-sm text-center">Feb 5, 2024</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
