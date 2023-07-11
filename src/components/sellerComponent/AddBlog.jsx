import React, { useState } from "react";
import { store } from "../../redux/store";
import { addBlogs } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddBlog = () => {
  const navigate = useNavigate();
  const state = store.getState();
  const userInfo = state.bazar.userInfo;

  const [title, setBlogTitle] = React.useState("");
  const [image, setBlogImage] = React.useState("");
  const [content, setBlogContent] = React.useState("");

  const [titleError, setTitleError] = React.useState("");
  const [imageError, setImageError] = React.useState("");
  const [contentError, setContentError] = React.useState("");

  const [isConfirmAddOverlayActive, setIsConfirmAddOverlayActive] =
    useState(false);

  const handleSubmit = () => {
    let isValid = true;

    if (!title.trim()) {
      setTitleError("Please enter your blog title");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!image.trim()) {
      setImageError("Please enter your blog image");
      isValid = false;
    } else {
      setImageError("");
    }

    if (!content.trim()) {
      setContentError("Please enter your blog content");
      isValid = false;
    } else {
      setContentError("");
    }
    if (isValid) {
      const formData = {
        title,
        image,
        content,
        authorId: userInfo,
      };
      console.log(formData);
      addBlogs(formData)
        .then((res) => {
          console.log(res);
          toast.success("add blog successfully")
          navigate("/seller/managementblog");
        })
        .catch((error) => {
          console.log(error);
          navigate("/login-seller");
        });
    }
  };
  return (
    <>
      <div className=" flex-1 md:w-1/2 flex flex-col gap-6 p-4 rounded font-titleFont border-[1px]">
        <h2 className=" text-2xl font-extrabold">Add Blog</h2>
        <div>
          <div className="p-4 md:p-5 lg:p-6">
            <div className="grid gap-y-3 pb-3">
              <div className="flex gap-3 lg:flex-row flex-col">
                <div className="w-full">
                  <div className=" text-sm">
                    Blog title <span className=" text-red-500">*</span>
                    {titleError && (
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
                        <span className="">{titleError}</span>
                      </div>
                    )}
                  </div>
                  <input
                    value={title}
                    onChange={(e) => setBlogTitle(e.target.value)}
                    className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                  />
                </div>
              </div>

              <div>
                <div className=" text-sm">
                  Blog image <span className=" text-red-500">*</span>
                  {imageError && (
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
                      <span className="">{imageError}</span>
                    </div>
                  )}
                </div>
              </div>
              <input
                value={image}
                onChange={(e) => setBlogImage(e.target.value)}
                className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              />

              <div>
                <div className=" text-sm">Blog content</div>
                {contentError && (
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
                    <span className="">{contentError}</span>
                  </div>
                )}
              </div>
              <textarea
                value={content}
                onChange={(e) => setBlogContent(e.target.value)}
                className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                placeholder="Your product's description"
              />
            </div>
            <button
              onClick={() => {
                setIsConfirmAddOverlayActive(true);
              }}
              className="bg-black float-right text-white text-base py-3 px-8 tracking-wide rounded-md hover:bg-gray-800 duration-300 active:text-black active:bg-white active:border active:border-black"
            >
              Add new blog
            </button>
            <div className="my-3 flex items-center px-3"></div>
          </div>
        </div>
      </div>
      {isConfirmAddOverlayActive && (
        // CONFIRM ADD OVERLAY
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
                      setIsConfirmAddOverlayActive(false);
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
                      Are you want to add {title}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        handleSubmit();
                        setIsConfirmAddOverlayActive(false);
                      }}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-600 border border-transparent rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => {
                        setIsConfirmAddOverlayActive(false);
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

export default AddBlog;
