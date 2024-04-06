import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import BookingList from "./BookingList";
import AddBooking from "./AddBooking";

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [showModel, setShowModel] = useState(false);
  const [booking, setBooking] = useState([]);
  const [open, setOpen] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "bookings"), (snapshot) => {
      let list = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setBookings(list);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleModel = (item) => {
    setOpen(true);
    setBooking(item);
    
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure to delete that booking")) {
      try {
        setOpen(false);
        await deleteDoc(doc(db, "bookings", id));
        setBookings(bookings.filter((booking) => booking.id !== id));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="bg-white h-screen ">
        <div className="flex flex-col">
          <button
            className=" place-self-end flex items-center gap-1 bg-gray-800 text-white py-2 px-4 mt-4 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-110"
            onClick={() => setShowModel(true)}
          >
            Add Booking
          </button>
          {showModel && <AddBooking onClose={() => setShowModel(false)} />}
        </div>
        <div>
          <div className=" absolute grid px-4   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bookings &&
              bookings.map((item) => (
                <div
                  key={item.id}
                  className="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-300 dark:border-gray-700"
                >
                  <div className="flex flex-col justify-between items-center mb-4">
                    <img
                      src={item.img}
                      alt=""
                      className="w-40 h-40 rounded-t-lg"
                    />
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h3>
                  </div>
                  <div className="p-1">
                    {/* <button
                      onClick={() => navigate(`/update/${item.id}`)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
                    >
                      Update
                    </button> */}
                    <button
                      onClick={() => handleModel(item)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </button>
                  </div>
                  {open && (
                    <BookingList
                      open={open}
                      setOpen={setOpen}
                      handleDelete={handleDelete}
                      {...booking}
                    />
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
