import React, { useState, useEffect } from "react";
import { BsCalendar2Date } from "react-icons/bs";

const User = () => {
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState("");
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = user.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(user.length / itemsPerPage);

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

  const userList = currentItems
    .filter((val) => {
      return search === "" ? val : val.name.includes(search);
    })
    .map((val) => (
      <tr key={val.id}>
        <td className="text-left bg-white p-3">{val.name}</td>
        <td className="text-left bg-white p-3">{val.email}</td>
        <td className="text-left bg-white p-3">{val.role}</td>
        <td className="text-left bg-white p-3">{val.date}</td>
        <td className="text-left bg-white p-3">
          <button className="text-white bg-green-700 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">
            Active
          </button>
        </td>
      </tr>
    ));

  return (
    <>
      <div className="details px-8 h-[100vh] py-10 ">
        <div className="flex justify-end p-1 gap-8">
          <form>
            <input
              type="search"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
              className="relative block min-w-0 flex-auto rounded border-2 border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem]"
            />
          </form>
          <button className="text-black border-2 flex items-center rounded-md text-sm px-6 py-2 text-center mb-2 gap-2">
            <BsCalendar2Date />
            Date
          </button>
          <button className="text-black border-2 rounded-md text-sm px-6 py-2 text-center mb-2">
            Filter
          </button>
        </div>
        <table className="w-full">
          <thead className="bg-gray-200 border-b-2 border-gray-100">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Name
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Email
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Role
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Register Date
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left w-1/5">
                Status
              </th>
            </tr>
          </thead>
          <tbody>{userList}</tbody>
        </table>
        {renderPagination()}
      </div>
    </>
  );
};

export default User;
