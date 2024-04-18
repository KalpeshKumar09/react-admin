import React from "react";
import { MdArrowDropUp } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center py-10 pr-2.5 pl-5 bg-white">
      <div className="mt-4 max-w-full w-[804px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 py-4 rounded-md border border-indigo-500 border-solid text-zinc-800 max-md:px-5 max-md:mt-10">
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
            <div className="flex flex-col grow px-5 py-4 rounded-md border border-indigo-500 border-solid shadow-sm text-zinc-800 max-md:px-5 max-md:mt-10">
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
      <div className="self-stretch mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[56%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-2 py-4 w-full bg-white rounded-md shadow-lg text-zinc-800 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-2xl">
                  Recent Bookings
                </div>
                <Link
                  to="/Booking"
                  className="justify-center p-2.5 text-base rounded-md border border-solid border-zinc-700 max-md:px-5 cursor-pointer"
                >
                  View All
                </Link>
              </div>
              <div className="flex gap-4 justify-between mt-3 text-base font-medium max-md:flex-wrap max-md:max-w-full">
                <div>Booking Id</div>
                <div>Customer Name</div>
                <div>Service Booked</div>
                <div>Booking Time </div>
                <div>Status</div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 whitespace-nowrap bg-indigo-500 rounded-md text-slate-50">
                  Completed
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 text-red-500 whitespace-nowrap bg-rose-400 rounded-md">
                  Cancelled
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center p-1 mt-1 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap max-md:max-w-full">
                <div className="self-stretch my-auto">7896541</div>
                <div className="self-stretch my-auto">Jhon Doe</div>
                <div className="self-stretch my-auto">Grooming</div>
                <div className="self-stretch my-auto">Feb 5, 2024</div>
                <div className="justify-center self-stretch p-2.5 whitespace-nowrap bg-green-100 rounded-md text-neutral-800">
                  Upcoming
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-11 pt-3 pb-6 w-full bg-white rounded-md shadow-lg text-zinc-800 max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 text-zinc-700 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto text-2xl">
                  New Partner Users
                </div>
                <Link
                  to="/Users"
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
              <div className="flex gap-5 justify-between p-2.5 mt-4 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-2.5 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-2.5 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-2.5 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-2.5 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-2.5 text-base rounded border-b border-solid border-slate-200 max-md:flex-wrap">
                <div>Jhon Doe</div>
                <div>JhonDoe@gmail.com</div>
                <div>Grooming</div>
                <div>Feb 5, 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
