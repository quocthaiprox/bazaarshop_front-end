import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoDark } from "../assets";
import axios from "axios";
import { toast } from "react-toastify";
import { registerUser } from "../api/Api";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [emailInput, setEmailInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  const [emailError, setEmailError] = React.useState("");
  const [usernameEror, setUserNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [confirmError, setConfirmError] = React.useState("");
  const userInfo = useSelector((state) => state.bazar.userInfo);

  const handleSubmit = () => {
    let isValid = true;

    if (!usernameInput.trim()) {
      setUserNameError("Please enter your name");
      isValid = false;
    } else {
      setUserNameError("");
    }

    if (!emailInput.trim()) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (passwordInput.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (passwordInput !== confirmPasswordInput) {
      setConfirmError("Passwords do not match");
      isValid = false;
    } else {
      setConfirmError("");
    }

    if (isValid) {
      const formData = {
        username: usernameInput,
        password: passwordInput,
        role: "customer",
        email: emailInput,
        image: "",
      };
      registerUser(formData)
        .then((res) => {
          console.log(res);
          toast.success("Register successfully, Please login to BAZAAR!");
          navigate("/login");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Can't register, please try again later");
        });
    }
  };
  return (
    <div className="grid h-screen w-screen items-center place-items-center bg-slate-200 text-sm font-medium px-4">
      {/* Register */}
      <div className="w-full max-w-sm rounded-lg bg-white shadow">
        <img
          className=" mx-auto md:my-6 h-8 lg:h-10 my-4"
          src={logoDark}
          alt=""
        />
        <div className="text-center">
          <h1 className="text-xl font-bodyFont font-extrabold">
            Register an account
          </h1>
        </div>
        <div className=" md:p-5 lg:p-6 p-4">
          <div className="grid gap-y-3">
            {emailError && (
              <span className="text-red-500 text-xs">{emailError}</span>
            )}

            <input
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              placeholder="email@example.com"
            />
            {usernameEror && (
              <span className="text-red-500 text-xs">{usernameEror}</span>
            )}
            <input
              value={usernameInput}
              onChange={(e) => setUsernameInput(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              placeholder="your username"
            />
            {passwordError && (
              <span className="text-red-500 text-xs">{passwordError}</span>
            )}
            <input
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              type="password"
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              placeholder="password"
            />
            {confirmError && (
              <span className="text-red-500 text-xs">{confirmError}</span>
            )}
            <input
              value={confirmPasswordInput}
              onChange={(e) => setConfirmPasswordInput(e.target.value)}
              type="password"
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              placeholder="confirm password"
            />
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="flex items-center justify-center gap-x-2 rounded-md border border-slate-600 bg-black py-3 px-4 text-slate-100 transition hover:bg-slate-700 active:bg-white active:text-slate-700"
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
                  d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                />
              </svg>
              Register
            </button>
            <button
              onClick={() => navigate("/login")}
              className="flex items-center justify-center gap-x-2 rounded-md  bg-blue-600 py-3 px-4 text-slate-100 transition hover:bg-blue-800 active:bg-white active:text-slate-700"
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
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                />
              </svg>
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
