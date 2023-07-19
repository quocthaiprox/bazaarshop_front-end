import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { facebookLogo, googleLogo, logoDark } from "../assets";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/bazarSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isConfirmSignOutOverlay, setIsConfirmSignOutOverlay] = useState(false);
  const [isHasAccount, setIsHasAccount] = useState(true);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const userInfo = useSelector((state) => state.bazar.userInfo);

  // HANDLE GOOGLE LOGIN
  const handleGoogleLogin = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;
        console.log(googleUser);
        dispatch(
          addUser({
            _id: googleUser.uid,
            name: googleUser.displayName,
            email: googleUser.email,
            image: googleUser.photoURL,
            isGoogleLogin: true,
          })
        );
        toast.success("Login with Google successfully");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // HANDLE SIGN OUT
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // HANDLE USERNAME SIGN IN
  const handleUsernameSignIn = async (formData) => {
    try {
      const res = await axios.post("/auth/login", formData);
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
          setTimeout(() => {
            navigate("/");
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
        toast.success("Login successfully, welcome to Bazaar!");
      } else {
        toast.error("Login Failed");
      }
    } catch (error) {
      console.log(error);
      setIsHasAccount(false);
      // setTimeout(() => {
      //   navigate("/register");
      // }, 1000);
    }
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!usernameInput.trim()) {
      setUsernameError("Please enter your username");
      isValid = false;
    } else {
      setUsernameError("");
    }
    if (passwordInput.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }
    if (isValid) {
      const formData = {
        username: usernameInput,
        password: passwordInput,
      };
      handleUsernameSignIn(formData);
    }
  };
  return (
    <>
      <div className="flex flex-row gap-4 h-screen w-screen items-center justify-center bg-slate-200 text-sm font-medium px-4">
        <div className="w-full max-w-sm rounded-lg bg-white shadow">
          <img
            className=" mx-auto md:my-6 h-8 lg:h-10 my-4"
            src={logoDark}
            alt=""
          />
          <div className="text-center">
            <h1 className="text-xl font-bodyFont font-extrabold">
              {userInfo
                ? `You have logged in as ${userInfo.name}`
                : "Log in to continue shopping"}
            </h1>
          </div>
          <div className=" md:p-5 lg:p-6 p-4">
            <div className="grid gap-y-3">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center justify-center gap-x-2  text-slate-700 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-300 transition hover:text-purple-400 hover:border-slate-400 hover:text-slate-900 hover:shadow transition"
              >
                <img className=" w-6 h-6" src={googleLogo} alt="" />
                Sign in with Google
              </button>
            </div>

            <div className="my-3 flex items-center px-3">
              <hr className="w-full border-slate-600" />
              <span className="mx-3 text-slate-500">or</span>
              <hr className="w-full border-slate-600" />
            </div>

            <div className="grid gap-y-3">
              {usernameError && (
                <span className="text-red-500 text-xs">{usernameError}</span>
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
              {!isHasAccount && (
                <div className="text-red-500 text-xs">
                  You don't have an account yet{" "}
                  <span
                    onClick={() => {
                      navigate("/register");
                    }}
                    className=" text-blue-500 underline hover:cursor-pointer ml-2"
                  >
                    Register Now
                  </span>
                </div>
              )}
              <button
                onClick={() => handleSubmit()}
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
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
                Sign in with Username
              </button>
              {userInfo && (
                <button
                  onClick={() => setIsConfirmSignOutOverlay(true)}
                  className="flex items-center justify-center gap-x-2 rounded-md border bg-red-500 py-3 px-4 text-slate-100 transition hover:bg-red-400 active:bg-white active:text-slate-700"
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
                  Sign Out
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {isConfirmSignOutOverlay && (
        // CONFIRM DELETE OVERLAY
        <div>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
              &#8203;
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                <div>
                  <div
                    onClick={() => {
                      setIsConfirmSignOutOverlay(false);
                    }}
                    className="mx-auto flex items-center cursor-pointer justify-center h-12 w-12 rounded-full bg-red-100"
                  >
                    <svg
                      className="h-6 w-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Are you want to Sign out of Bazaar
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        handleSignOut();
                        setIsConfirmSignOutOverlay(false);
                      }}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => {
                        setIsConfirmSignOutOverlay(false);
                      }}
                      type="button"
                      className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500 sm:text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
