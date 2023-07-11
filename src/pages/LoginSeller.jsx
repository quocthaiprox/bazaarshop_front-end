import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginSeller = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const handleSellerSignIn = async () => {
    try {
      const res = await axios.post("/auth/login", {
        username: usernameInput,
        password: passwordInput,
      });
      console.log(res);
      if (res.data.success) {
        if (res.data.user.role === "admin") {
          dispatch(
            addUser({
              _id: res.data.user._id,
              name: res.data.user.username,
              email: res.data.user.email,
              image: res.data.user.image,
              accessToken: res.data.accessToken,
              isFacebookLogin: true,
              role: "admin",
            })
          );
          toast.success("Login with Seller successfully");
          setTimeout(() => {
            navigate("/seller");
          }, 1500);
        } else {
          dispatch(
            addUser({
              _id: res.data.user._id,
              name: res.data.user.username,
              email: res.data.user.email,
              image: res.data.user.image,
              accessToken: res.data.accessToken,
              isFacebookLogin: true,
              role: "customer",
            })
          );
          setTimeout(() => {
            navigate("/");
          }, 1500);
        }
      } else {
        toast.error("Login Failed.");
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed. You are not administrator");
    }
  };
  return (
    <div>
      <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div class="relative py-3 sm:max-w-xl sm:mx-auto">
          <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div class="max-w-md mx-auto">
              <div>
                <h1 class="text-2xl font-semibold">Login to Seller Centre</h1>
              </div>
              <div class="divide-y divide-gray-200">
                <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div class="relative pb-4">
                    <input
                      value={usernameInput}
                      onChange={(e) => {
                        setUsernameInput(e.target.value);
                      }}
                      autocomplete="off"
                      id="email"
                      name="email"
                      type="text"
                      class="peer placeholder-transparent h-10 w-full text-sm border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      for="email"
                      class="absolute left-0 -top-3.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                  </div>
                  <div class="relative">
                    <input
                      autocomplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={passwordInput}
                      onChange={(e) => {
                        setPasswordInput(e.target.value);
                      }}
                      class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 text-sm"
                      placeholder="Password"
                    />
                    <label
                      for="password"
                      class="absolute left-0 -top-3.5 text-gray-600 text-xs peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div class="relative">
                    <button
                      onClick={() => {
                        handleSellerSignIn();
                      }}
                      class="bg-blue-500 text-white text-sm rounded-md px-4 py-2"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSeller;
