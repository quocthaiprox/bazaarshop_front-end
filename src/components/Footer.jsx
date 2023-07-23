import React from "react";
import { logoLight } from "../assets";
import { paymentLogo, payment } from "../assets";
import { MdLocationOn } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { BsPersonFill, BsPaypal } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className=" bg-black text-[#949494] py-20 font-titleFont ">
      <div className=" max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {/* Logo start */}
        <div className="flex flex-col gap-7 ">
          <img className="w-32 mx-auto" src={logoLight} alt="logoLight" />
          <div className="text-white text-sm tracking-wide uppercase mx-auto">
            © Quocthaiprox
          </div>
          <img className="w-56 mx-auto" src={paymentLogo} alt="paymentLogo" />
          <div className="flex gap-5 text-xl text-gray-400 mx-auto">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* Logo end */}
        {/* Locate Us start */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 text-center">
            Locate Us
          </h2>
          <div className="text-base w-fit flex flex-col gap-2 pl-5 mx-0 md:mx-auto">
            <p>Go Vap Districs, HCMC</p>
            <p>Phone: 0876763409</p>
            <p>e-mail: ngoquocthai.dev@gmail.com</p>
          </div>
        </div>
        {/* Locate Us end */}
        {/* Profile start */}
        <div className="pl-5">
          <h2  className="text-2xl font-semibold text-white mb-4 text-center ">
            Profile
          </h2>
          <div className="flex flex-col gap-2 text-base w-fit md:mx-auto mx-0">
            <p onClick={() => navigate("/login")} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>
            <p onClick={() => navigate("/checkout")} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>
            <p onClick={() => navigate("/cart")}  className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>
            <p onClick={() => navigate("/contact")} className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* Profile end */}
        {/* sub start */}
        <div className="flex flex-col justify-center px-5">
          <input
            className=" bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="email ..."
          />
          <button className="text-sm text-white border border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/* sub end */}
      </div>
    </div>
  );
};

export default Footer;
