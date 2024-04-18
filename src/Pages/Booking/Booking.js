import React, { useState, useEffect } from "react";
import { BsCalendar2Date } from "react-icons/bs";

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

export default function Booking() {
  const [booking, setBooking] = useState([]);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

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
  const currentItems = booking.slice(indexOfFirstItem, indexOfLastItem);

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
      <div className="pagination flex items-center justify-center px-3 h-8 w-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {pageNumbers}
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
        <td className="text-left bg-white p-3">{val.name || ""}</td>
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
            className=" relative  block min-w-0 flex-auto rounded border-2 border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] "
          />
        </form>
        <button className="text-black border-2  flex items-center rounded-md text-sm px-6 py-2 text-center  mb-2 gap-2">
          <BsCalendar2Date />
          Date
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
