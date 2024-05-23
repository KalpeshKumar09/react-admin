import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
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
          <div className="flex flex-col py-4 bg-white max-md:px-5">
            <div className=" max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-4 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start px-16 pt-11 pb-20 w-full text-2xl bg-white rounded-md shadow-2xl max-md:px-5 max-md:mt-4 max-md:max-w-full">
                    <svg
                      width="124"
                      height="124"
                      viewBox="0 0 124 124"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_84_39)">
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
                        <clipPath id="clip0_84_39">
                          <rect width="124" height="124" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <h2 className="mt-5 ml-7 font-semibold text-zinc-700 max-md:ml-2.5 text-left">
                      {userData.name}
                    </h2>
                    <div className="flex gap-4 mt-9 text-base text-center whitespace-nowrap text-zinc-700">
                      <h4 className="justify-center p-2.5 border-r border-solid border-slate-200">
                        86
                        <br />
                        Post
                      </h4>
                      <h4 className="justify-center p-2.5 border-r border-solid border-slate-200">
                        86
                        <br />
                        Followers
                      </h4>
                    </div>
                    <div className="flex gap-3 mt-7 whitespace-nowrap text-zinc-700 text-base">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21 1L11 8L1 1"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 1V13C1 13.5304 1.21071 14.0391 1.58579 14.4142C1.96086 14.7893 2.46957 15 3 15H19C19.5304 15 20.0391 14.7893 20.4142 14.4142C20.7893 14.0391 21 13.5304 21 13V1"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto">Jhondoe@gmail.com</p>
                    </div>
                    <div className="flex gap-3.5 mt-5 whitespace-nowrap text-zinc-700 text-base">
                      <svg
                        width="16"
                        height="22"
                        viewBox="0 0 16 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13 1H3C1.89543 1 1 1.89543 1 3V19C1 20.1046 1.89543 21 3 21H13C14.1046 21 15 20.1046 15 19V3C15 1.89543 14.1046 1 13 1Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto">7474747474</p>
                    </div>
                    <div className="flex gap-3 mt-6 whitespace-nowrap text-zinc-700 text-base">
                      <svg
                        width="22"
                        height="30"
                        viewBox="0 0 22 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 1C12.3132 1 13.6136 1.25866 14.8268 1.7612C16.0401 2.26375 17.1425 3.00035 18.0711 3.92893C18.9997 4.85752 19.7362 5.95991 20.2388 7.17317C20.7413 8.38642 21 9.68678 21 11C21 16.52 11 29 11 29C11 29 1 16.52 1 11C1 8.34784 2.05357 5.8043 3.92893 3.92893C5.8043 2.05357 8.34784 1 11 1Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto my-auto">Jaipur</p>
                    </div>
                    <div className="flex gap-4 mt-4 whitespace-nowrap text-zinc-700 text-base">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 1H12V7"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 12L12 1"
                          stroke="#404147"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <p className="flex-auto">https://google.com</p>
                    </div>
                    <div className="flex gap-5 justify-between mt-8 text-base font-semibold">
                      <button className="justify-center px-2.5 py-2 rounded-md border border-solid border-zinc-700 text-zinc-700">
                        Block User
                      </button>
                      <button className="justify-center px-1.5 py-2 bg-[#FF0000] rounded-md border border-red-500 border-solid text-slate-50 bg-[#F24135]">
                        Delete User
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow max-md:mt-4 max-md:max-w-full">
                    <div className="flex flex-col justify-end px-7 py-8 bg-white rounded-md shadow-2xl text-zinc-700 max-md:px-5 max-md:max-w-full">
                      <h4 className="text-2xl font-semibold max-md:max-w-full">
                        About Me
                      </h4>
                      <p className="mt-9 text-md max-md:max-w-full font-normal">
                        Hello, I’m Anshan Handgun Creative Graphic Designer &
                        User Experience Designer based in <br />
                        Website, I create digital Products a more Beautiful and
                        usable place. Morbid accusant ipsum.
                        <br />
                        Nam nec tellus at.
                      </p>
                    </div>
                    <div className="flex flex-col items-start pt-9 pr-20 pb-16 pl-5 mt-3.5 bg-white rounded-md shadow-2xl max-md:pr-5 max-md:max-w-full">
                      <div className="max-w-full w-[761px]">
                        <div className="flex gap-2 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                              <h4 className="text-lg font-semibold">
                                Personal Details
                              </h4>
                              <p className="mt-7">First Name</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 mt-1 text-sm border-b border-solid border-slate-200 max-md:pr-5">
                                Jhon{" "}
                              </p>
                              <p className="mt-7 text-zinc-800">
                                Register Date
                              </p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 text-sm border-b border-solid border-slate-200 max-md:pr-5">
                                21 December 2023{" "}
                              </p>
                              <p className="mt-7 text-zinc-800">Address</p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col self-stretch my-auto text-base font-medium text-zinc-700 max-md:mt-10">
                              <p>Last Name</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 mt-1 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                Doe
                              </p>
                              <p className="mt-7">Role</p>
                              <p className=" font-normal justify-center items-start px-2.5 py-2 mt-1 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                User
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="font-normal justify-center items-start px-2.5 py-2 mt-1 max-w-full text-sm border-b border-solid border-slate-200 text-zinc-700 w-[761px] max-md:pr-5">
                        Street 110-B Kalians Bag, Dewan, M.P. New York
                      </p>
                      <div className="mt-7 max-w-full w-[761px]">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-base font-medium text-zinc-700 max-md:mt-10">
                              <p>Postal Code</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 mt-1 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                302018
                              </p>
                              <p className="mt-8">State</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 mt-1 text-sm whitespace-nowrap border-b border-solid border-slate-200 max-md:pr-5">
                                Rajasthan
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col whitespace-nowrap text-zinc-700 max-md:mt-10">
                              <p className="text-base font-medium">City</p>
                              <p className="font-normal justify-center items-start px-2.5 py-2 text-sm border-b border-solid border-slate-200 max-md:pr-5">
                                Jaipur
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
};

export default UserProfile;
