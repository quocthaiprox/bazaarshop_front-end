import React from "react";
import { Link } from "react-router-dom";
import { facebookLogo, logoDark } from "../assets";
import SendMessageForm from "../components/SendMessageForm";

const Contact = () => {
  return (
    <div className="bg-slate-200">
      <div className=" max-w-screen-xl mx-auto py-20 flex md:flex-row gap-4 px-3 flex-col">
        <div className="w-full md:w-2/4 bg-[#fafafa] py-6 px-4 border border-slate-300 rounded">
          <div className=" flex flex-col gap-6  pb-6 font-titleFont">
            <h2 className=" text-2xl  font-extrabold">Contact Info</h2>
            <div className="px-7">
              <div className="mb-8">
                <div className=" flex gap-2 mb-2 font-bold">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p className=" text-red-600">Address</p>
                </div>
                <p>Go Vap Districs, HCMC</p>
              </div>
              <div className=" mb-8 ">
                <div className=" flex gap-2 mb-2 font-bold">
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                  <p className=" text-red-600">Phone</p>
                </div>
                <p className="flex gap-4">
                  <span>0838393408</span> |<span>0783957933</span>
                </p>
              </div>
              <div className="mb-8">
                <div className=" flex gap-2 mb-2 font-bold">
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
                  <p className=" text-red-600">Support</p>
                </div>
                <p className=" font-medium">support.bazar@gmail.com</p>
              </div>
              <div className="mb-8">
                <div className=" flex gap-2 mb-2 font-bold">
                  <img className="w-6 h-6" src={facebookLogo} alt="" />
                  <p className=" text-red-600">Facebook</p>
                </div>
                <p className=" font-medium ">
                  <a
                    className="hover:text-blue-500 hover:decoration-solid"
                    href="https://www.facebook.com/profile.php?id=100063670489376"
                  >
                    Bazar Shop
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <SendMessageForm />
      </div>
    </div>
  );
};

export default Contact;
