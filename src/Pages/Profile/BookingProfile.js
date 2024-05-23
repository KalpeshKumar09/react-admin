import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const BookingProfile = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);
  return (
    <>
      {userData ? (
        <>
          <div className="flex flex-col px-10 bg-white max-md:px-5">
            <div className=" max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow px-12 py-20 w-full bg-white rounded-md shadow-xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                    <div className="flex gap-5 justify-between items-start overflow-hidden">
                      <div className="flex flex-col self-start text-2xl font-semibold text-zinc-700">
                        <svg
                          width="124"
                          height="124"
                          viewBox="0 0 124 124"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_84_236)">
                            <path
                              d="M62 124C96.2417 124 124 96.2417 124 62C124 27.7583 96.2417 0 62 0C27.7583 0 0 27.7583 0 62C0 96.2417 27.7583 124 62 124Z"
                              fill="#E8EBF3"
                            />
                            <path
                              d="M62 56.3633C70.3009 56.3633 77.0303 49.6339 77.0303 41.333C77.0303 33.032 70.3009 26.3027 62 26.3027C53.6991 26.3027 46.9697 33.032 46.9697 41.333C46.9697 49.6339 53.6991 56.3633 62 56.3633Z"
                              fill="#6C63FF"
                              stroke="#6C63FF"
                              stroke-width="1.27273"
                            />
                            <path
                              d="M36.6994 103.333H87.3411C94.3264 103.333 97.6969 101.336 97.6969 97.0102C97.6969 86.8794 83.8082 73.2725 62 73.2725C40.1918 73.2725 26.303 86.8794 26.303 97.0102C26.303 101.336 29.6737 103.333 36.6994 103.333Z"
                              fill="#6C63FF"
                              stroke="#6C63FF"
                              stroke-width="1.27273"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_84_236">
                              <rect width="124" height="124" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>

                        <h4 className="mt-5">Jhon Doe</h4>
                      </div>
                      <div className="flex gap-2.5 self-end mt-36 font-medium max-md:mt-10">
                        <div className="justify-center p-0.5 text-base text-white whitespace-nowrap bg-green-600 rounded">
                          AMOUNT
                        </div>
                        <p className="my-auto text-lg text-zinc-700">INR 249</p>
                      </div>
                    </div>
                    <div className="mt-7 text-lg text-zinc-700 max-md:mr-2.5">
                      Booking Number:PETCARE-123456
                    </div>
                    <div className="mt-7 text-lg font-medium text-zinc-700">
                      Date and Time
                    </div>
                    <div className="mt-3.5 text-lg text-zinc-700">
                      Tuesday, January 30, 2024, 10:00 AM
                    </div>
                    <div className="mt-8 text-lg font-medium text-zinc-700">
                      Contact Details:
                    </div>
                    <div className="flex gap-3 mt-6 text-lg whitespace-nowrap text-zinc-700">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 22 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 1L11 8.87627L1 1"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 1V14.5022C1 15.099 1.21071 15.6714 1.58579 16.0934C1.96086 16.5155 2.46957 16.7525 3 16.7525H19C19.5304 16.7525 20.0391 16.5155 20.4142 16.0934C20.7893 15.6714 21 15.099 21 14.5022V1"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto">Jhondoe@gmail.com</p>
                    </div>
                    <div className="flex gap-2.5 mt-4 text-lg whitespace-nowrap text-zinc-700">
                      <svg
                        width="16"
                        height="22"
                        viewBox="0 0 16 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1H3C1.89543 1 1 2.00752 1 3.25036V21.2533C1 22.4961 1.89543 23.5036 3 23.5036H13C14.1046 23.5036 15 22.4961 15 21.2533V3.25036C15 2.00752 14.1046 1 13 1Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto my-auto">7474747474</p>
                    </div>
                    <div className="flex gap-3 self-start mt-3.5 text-lg whitespace-nowrap text-zinc-700">
                      <svg
                        width="22"
                        height="28"
                        viewBox="0 0 22 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1C12.3132 1 13.6136 1.29104 14.8268 1.85649C16.0401 2.42195 17.1425 3.25075 18.0711 4.29558C18.9997 5.34041 19.7362 6.5808 20.2388 7.94593C20.7413 9.31107 21 10.7742 21 12.2518C21 18.4628 11 32.5051 11 32.5051C11 32.5051 1 18.4628 1 12.2518C1 9.26765 2.05357 6.40571 3.92893 4.29558C5.8043 2.18546 8.34784 1 11 1Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 15.6271C12.6569 15.6271 14 14.1158 14 12.2515C14 10.3873 12.6569 8.87598 11 8.87598C9.34315 8.87598 8 10.3873 8 12.2515C8 14.1158 9.34315 15.6271 11 15.6271Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="my-auto">Jaipur</p>
                    </div>
                    <div className="mt-8 text-lg font-medium text-zinc-700">
                      Allergies:
                    </div>
                    <div className="justify-center text-center px-2.5 py-1 mt-5 text-base whitespace-nowrap border border-green-600 border-solid text-zinc-700 max-md:px-5">
                      None
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
                    <div className="flex flex-col py-8 pr-20 pl-7 bg-white rounded-md shadow-xl max-md:px-5 max-md:max-w-full">
                      <div className="mr-6 max-md:mr-2.5 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-md font-medium text-zinc-700 max-md:mt-10">
                              <h4 className="text-xl font-semibold">
                                Service Details:
                              </h4>
                              <p className="mt-6">
                                Service:{" "}
                                <span className="font-normal">Vet Service</span>
                              </p>
                              <p className="mt-7">Date and Time</p>
                              <p className="mt-3.5 font-normal">
                                Tuesday, January 30, 2024, 10:00 AM
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-10 text-md font-medium text-zinc-700 max-md:mt-10">
                              <p>
                                Address:{" "}
                                <span className=" font-normal">
                                  456 Anytown Lane, Anytown,
                                </span>
                                <br />
                                <span className="font-normal">
                                  CA 90210
                                </span>{" "}
                              </p>
                              <p className="mt-4">
                                Payment Status:{" "}
                                <span className="font-normal">Paid</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="mt-6 mr-6 text-md font-medium text-red-500 max-md:mr-2.5 max-md:max-w-full">
                        Concern:{" "}
                        <span className="font-normal text-[#FF0000]">
                          Vomiting and loss of appetite for the past 2 days.
                        </span>
                      </p>
                      <p className="mt-5 mr-6 text-md font-medium text-zinc-700 max-md:mr-2.5 max-md:max-w-full">
                        Additional Details:{" "}
                        <span className="font-normal">
                          No recent dietary changes, up-to-date on vaccinations.
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-start pt-9 pr-20 pb-14 pl-4 mt-3 bg-white rounded-md shadow-xl max-md:pr-5 max-md:max-w-full">
                      <div className="max-w-full w-[840px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[61%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                              <h4 className="text-lg font-semibold">
                                Pet Details:
                              </h4>
                              <p className="mt-7">Pet Name</p>
                              <p className="justify-center items-start px-2.5 py-2 mt-1 text-sm border-b border-solid border-slate-200 max-md:pr-5 font-normal">
                                {userData.name}
                              </p>
                              <p className="mt-7 text-zinc-800">Breed</p>
                              <p className="justify-center font-normal items-start px-2.5 py-2 mt-1 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                Persian
                              </p>
                              <p className="mt-7 text-zinc-800">
                                Special Needs
                              </p>
                              <p className="font-normal justify-center px-2.5 py-2 text-sm border-b border-solid border-slate-200">
                                Diabetic, requires insulin injection twice
                                daily.
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[39%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow mt-11 text-base font-medium text-zinc-700 max-md:mt-10">
                              <p>Species</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                Cat
                              </p>
                              <p className="mt-7">Age</p>
                              <p className=" font-normal justify-center items-start px-2.5 py-2 text-sm border-b border-solid border-slate-200 max-md:pr-5">
                                8 years
                              </p>
                              <p className="mt-8">Years of experience</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 text-sm border-b border-solid border-slate-200 max-md:pr-5">
                                10 years
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10 max-w-full w-[840px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 flex-col">
                          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-8">
                              <p>Pet Images</p>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-20 md:flex md:flex-wrap">
                            <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
                              <div className="shrink-0 mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                            </div>
                            <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
                              <div className="shrink-0 mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                            </div>
                            <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
                              <div className="shrink-0 mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                            </div>
                            <div className="flex flex-col w-2/12 max-md:ml-0 max-md:w-full">
                              <div className="shrink-0 mt-6 h-24 border-2 border-dashed border-zinc-200 w-[186px] max-md:mt-10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start py-8 pr-20 pl-6 mt-3.5 text-lg font-semibold bg-white rounded-md shadow-xl max-md:px-5 max-md:max-w-full">
              <h4 className="text-[#FF0000] max-md:max-w-full">
                Special Instructions
              </h4>
              <p className="font-normal mt-6 text-zinc-700 max-md:max-w-full">
                Whiskers is timid and prefers quiet environments. He's
                indoor-only and uses a litter box in the laundry room.
              </p>
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default BookingProfile;
