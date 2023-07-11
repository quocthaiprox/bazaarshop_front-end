import axios from "axios";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const SendMessageForm = () => {
  const inputName = useRef();
  const [name, SetName] = React.useState("");
  const [phoneNumber, SetPhoneNumber] = React.useState("");
  const [email, SetEmail] = React.useState("");
  const [message, SetMessage] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [phoneNumberError, setPhoneNumberError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [messageError, setMessageError] = React.useState("");

  const postMessage = async (data) => {
    try {
      await axios.post("/messages/", data);
      toast.success("Sent message successfully, We will contact you soon!");
      SetName("");
      SetPhoneNumber("");
      SetEmail("");
      SetMessage("");
      inputName.current.focus();
    } catch (error) {
      console.log(error.message);
      toast.error("Can't send message, please try again later");
    }
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!name.trim()) {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!phoneNumber.trim()) {
      setPhoneNumberError("Please enter your phone number");
      isValid = false;
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      setPhoneNumberError("Please enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneNumberError("");
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!message.trim()) {
      setMessageError("Please enter your message");
      isValid = false;
    } else {
      setMessageError("");
    }

    if (isValid) {
      const formData = {
        name,
        phoneNumber,
        email,
        message,
      };
      //console.log(formData);
      postMessage(formData);
    }
  };

  return (
    <div className="w-full md:w-2/4 bg-[#fafafa] py-6 px-4 border border-slate-300 rounded">
      <div className=" flex flex-col gap-6 pb-6 font-titleFont">
        <h2 className=" text-2xl font-extrabold">Send Messages</h2>
        <div>
          <div className="p-4 md:p-5 lg:p-6">
            <div className="grid gap-y-3">
              {nameError && (
                <div className=" text-xs text-red-500 flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <span className="">{nameError}</span>
                </div>
              )}
              <input
                ref={inputName}
                className={` rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400}`}
                placeholder="name"
                onChange={(e) => {
                  SetName(e.target.value);
                }}
                value={name}
              />
              {phoneNumberError && (
                <div className=" pt-3 text-xs text-red-500 flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <span className="">{phoneNumberError}</span>
                </div>
              )}
              <input
                className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                placeholder="Phone Number"
                onChange={(e) => {
                  SetPhoneNumber(e.target.value);
                }}
                value={phoneNumber}
              />
              {emailError && (
                <div className="pt-3  text-xs text-red-500 flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <span className="">{emailError}</span>
                </div>
              )}
              <input
                className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                placeholder="email@example.com"
                onChange={(e) => {
                  SetEmail(e.target.value);
                }}
                value={email}
              />
              {messageError && (
                <div className="pt-3  text-xs text-red-500 flex flex-row gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-3 aspect-square"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>
                  <span className="">{messageError}</span>
                </div>
              )}
              <textarea
                className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                placeholder="Message"
                onChange={(e) => {
                  SetMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <div className="my-3 flex items-center px-3"></div>
            <div className="grid gap-y-3">
              <button
                className="flex items-center justify-center gap-x-2 rounded-md border bg-red-500 py-3 px-4 text-slate-100 transition hover:bg-red-400 active:bg-white active:text-slate-700"
                onClick={() => {
                  handleSubmit();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessageForm;
