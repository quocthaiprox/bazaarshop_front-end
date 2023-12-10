import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartImg, logoDark } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Cart from "./../pages/Cart";
export const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [isSiteBarOpen, SetSiteBarOpen] = useState(false);
  const navigate = useNavigate();
  const routingToSeller = () => {
    if (userInfo?.role === "admin") {
      navigate("/seller");
    } else {
      navigate("/login-seller");
    }
  };


  return (
    <div className="w-full h-20 bg-white border-b border-y-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="ml-5">
            <img className="w-28" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className=" flex justify-center gap-8">
          <ul className=" lg:flex justify-center gap-8 hidden">
            <Link to="/">
              <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Home
              </li>
            </Link>
            <Link to="">
              <li className="group/category relative text-base text-black font-bold  hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Category
                <div className="group-hover/category:flex hidden absolute no-underline text-black bg-white w-28">
                  <ul className="">
                    <li className="px-4 py-3 hover:text-orange-900 hover:underline">
                      <Link href="#">Women</Link>
                    </li>
                    <li className="px-4 py-3 hover:text-orange-900 hover:underline">
                      <Link href="#">Men</Link>
                    </li>
                    <li className="px-4 py-3 hover:text-orange-900 hover:underline">
                      <Link href="#">Kid</Link>
                    </li>
                    {/* Add more items as needed */}
                  </ul>
                </div>
              </li>
            </Link>

            {/* <Link to="/seller"> */}
            <li
              className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              onClick={() => {
                routingToSeller();
              }}
            >
              Seller Centre
            </li>
            {/* </Link> */}
            <Link to="/contact">
              <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Contact
              </li>
            </Link>
            <Link to="/blog">
              <li className=" text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
                Blog
              </li>
            </Link>
          </ul>
          <Link to="/cart">
            <div className=" relative">
              <img className=" w-6" src={cartImg} alt="cartImg" />
              <span className=" absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData?.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 p-[2px] border border-black rounded-full"
              src={
                userInfo?.image ||
                "https://www.logolynx.com/images/logolynx/eb/eb88fe75aabec090263720da971f3647.png"
              }
              alt="userIMG"
            />
          </Link>
          {userInfo && (
            <p className=" text-base font-titleFont font-semibold underline underline-offset-2 hidden md:flex">
              {userInfo.isGoogleLogin ? userInfo.email : userInfo.name}
            </p>
          )}
          <div
            className=" cursor-pointer hover:bg-slate-200 p-2 rounded-full lg:hidden"
            onClick={() => {
              SetSiteBarOpen(true);
            }}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </div>
        </div>
      </div>

      {true && <SiteBar isOpen={isSiteBarOpen} setOpen={SetSiteBarOpen} />}
    </div>
  );
};

const SiteBar = ({ isOpen, setOpen }) => {
  const userInfo = useSelector((state) => state.bazar.userInfo);
  return (
    <div className="shadow-lg">
      <div
        className={`fixed top-0 left-0 h-full bg-white z-50 transition-all duration-500 ease-in-out w-64 ${
          isOpen ? "translate-x-0" : "translate-x-[-280px]"
        }`}
      >
        <button
          className="absolute top-2 right-2 p-2 rounded-full hover:bg-slate-200"
          onClick={() => {
            setOpen(false);
          }}
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className=" px-12 py-3">
          <img className="w-32" src={logoDark} alt="logoDark" />
        </div>
        <div className=""></div>
        <ul
          onClick={() => {
            setOpen(false);
          }}
          className="mt-10 pb-2 flex flex-col gap-6 pl-12 border-b-[1px] border-slate-300"
        >
          <Link to="/">
            <li className="h-6 flex flex-row leading-8 gap-2 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
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
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              <span className="">Home</span>
            </li>
          </Link>
          <Link to="/cart">
            <li className="flex flex-row leading-8 gap-2 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
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
              Cart
            </li>
          </Link>
          <Link to="/contact">
            <li className="flex flex-row leading-8 gap-2 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
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
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                />
              </svg>
              Contact
            </li>
          </Link>
          <Link to="/blog">
            <li className="flex flex-row gap-2 leading-8 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
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
              Blog
            </li>
          </Link>
          <Link to="/login">
            <li className="pb-2 flex flex-row gap-2 leading-8 text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 ">
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
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {userInfo ? userInfo.name : "Login / Log out"}
            </li>
          </Link>
        </ul>
      </div>

      <div
        className={`${
          isOpen ? "fixed inset-0 z-40 bg-slate-500 bg-opacity-50" : ""
        }`}
        onClick={() => {
          setOpen(false);
        }}
      ></div>
    </div>
  );
};
