import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";

const generateRandomBookingNumber = () => {
  const length = 8;
  const characters = "0123456789";
  let bookingNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    bookingNumber += characters.charAt(randomIndex);
  }

  return bookingNumber;
};

export default function VetBooking() {
  const [booking, setBooking] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setBooking(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!booking) return null; // Check if booking data is not available

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredUsers = booking.filter((val) => {
    const userDate = new Date(val.date);
    if (selectedDate) {
      return (
        (!search || val.name.includes(search)) &&
        userDate.toDateString() === selectedDate.toDateString()
      );
    }
    return !search || val.name.includes(search);
  });

  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(booking.length / itemsPerPage);

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handleChangePage(i)}>
          {i}
        </button>
      );
    }
    return (
      <div className="flex justify-center items-center py-4">
        <div className="pagination flex items-center justify-center px-3 h-8 w-4 border-2 border-gray-400 shadow-2xl rounded-md text-black">
          {pageNumbers}
        </div>
      </div>
    );
  };

  const bookingList = currentItems
    .filter((val) => {
      return search === "" ? val : val.name.includes(search);
    })
    .map((val, index) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3">{index + 1}</td>
        <td className="text-left bg-white p-3">
          {generateRandomBookingNumber()}
        </td>
        <td className="text-left bg-white p-3">{val.service || ""}</td>
        <td className="text-left bg-white p-3">{val.bookingTime || ""}</td>
        <td className="text-left bg-white p-3">
          <Link to={`/BookingProfile/${val.id}`}>{val.name}</Link>
        </td>
        <td className="text-left bg-white p-3">{val.mobile || ""}</td>
        <td className="text-left bg-white p-3">{val.payment || ""}</td>
        <td className="text-left bg-white p-3">
          <button className="text-white bg-green-700   font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            Active
          </button>
        </td>
      </tr>
    ));

  return (
    <div className="details px-8 h-screen py-10">
      <div className="flex justify-end p-1 gap-8">
        <form>
          <input
            type="search"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            className="    min-w-0 flex-auto rounded border-2 border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] "
          />
        </form>
        <button className="text-black border-2 flex items-center rounded-md text-sm px-2 text-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 4.5H5C3.89543 4.5 3 5.39543 3 6.5V20.5C3 21.6046 3.89543 22.5 5 22.5H19C20.1046 22.5 21 21.6046 21 20.5V6.5C21 5.39543 20.1046 4.5 19 4.5Z"
              stroke="#404147"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2.5V6.5"
              stroke="#404147"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 2.5V6.5"
              stroke="#404147"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 10.5H21"
              stroke="#404147"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="text-black text-sm text-center rounded-sm w-24"
            placeholderText="Select Date"
          />
        </button>
        <button className="text-black border-2   rounded-md text-sm px-6 py-2 text-center mb-2">
          Filter
        </button>
      </div>
      <table className="w-full flex-wrap">
        <thead className="bg-gray-200 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Serial No.
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Booking Id
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Service Type
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Booking Time
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Customer Name
            </th>

            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Mobile
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Payment Status
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">
              Status
            </th>
          </tr>
        </thead>
        <tbody>{bookingList}</tbody>
      </table>
      {renderPagination()}
    </div>
  );
}
