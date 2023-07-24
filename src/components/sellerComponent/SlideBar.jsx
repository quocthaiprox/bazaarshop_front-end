import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SlideBar = () => {
  const navigate = useNavigate();
  const [isProductSubmenuActive, setIsProductSubmenuActive] = useState(false);
  const [isBlogSubmenuActive, setIsBlogSubmenuActive] = useState(false);
  return (
    <div>
      <div
        id="sidebar"
        className=" sticky top-0 font-titleFont hidden z-20 left-0  flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75"
        aria-label="Sidebar"
      >
        <div className="relative flex-1 flex flex-col min-h-0 border-r border-b border-gray-200 bg-white pt-0">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex-1 px-3 bg-white divide-y space-y-1">
              <ul className="space-y-2 pb-2">
                {/* Dash board */}
                <li onClick={() => {
                    navigate("/seller/managementorders");
                  }}>
                  <a
                    href="#"
                    className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 group"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill=""
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>

                    <span className="ml-3">Dashboard</span>
                  </a>
                </li>
                {/* user */}
                <li
                  onClick={() => {
                    navigate("/seller/managementusers");
                  }}
                >
                  <a
                    href="#"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Users{" "}
                    </span>
                  </a>
                </li>
                {/* product */}
                <li
                  onClick={() => {
                    setIsProductSubmenuActive(!isProductSubmenuActive);
                  }}
                >
                  <a
                    href="#"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Products
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                      />
                    </svg>
                  </a>
                </li>
                {isProductSubmenuActive && (
                  <div>
                    <li
                      onClick={() => {
                        navigate("/seller/addproduct");
                      }}
                    >
                      <a className="text-base cursor-pointer text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                        <span className="ml-5 flex-1 whitespace-nowrap">
                          Add Products
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        navigate("/seller/managementproduct");
                      }}
                    >
                      <span className="text-base cursor-pointer text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group ">
                        <span className="ml-5 flex-1 whitespace-nowrap">
                          Management Products
                        </span>
                      </span>
                    </li>
                  </div>
                )}
                {/* blog */}
                <li
                  onClick={() => {
                    setIsBlogSubmenuActive(!isBlogSubmenuActive);
                  }}
                >
                  <a
                    href="#"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>

                    <span className="ml-3 flex-1 whitespace-nowrap">Blogs</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                      />
                    </svg>
                  </a>
                </li>
                {isBlogSubmenuActive && (
                  <div>
                    <li
                      onClick={() => {
                        navigate("/seller/addblog");
                      }}
                    >
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <span className="ml-5 flex-1 whitespace-nowrap">
                          Add Blog
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        navigate("/seller/managementblog");
                      }}
                    >
                      <a
                        href="#"
                        className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                      >
                        <span className="ml-5 flex-1 whitespace-nowrap">
                          Management Blog
                        </span>
                      </a>
                    </li>
                  </div>
                )}
                <li
                  onClick={() => {
                    navigate("/seller/managementmessages");
                  }}
                >
                  <a
                    href="#"
                    className="text-base text-gray-900 font-normal rounded-lg hover:bg-gray-100 flex items-center p-2 group "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                      />
                    </svg>

                    <span className="ml-3 flex-1 whitespace-nowrap">
                      Messages Management
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
