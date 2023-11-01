import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const BlogDetail = () => {
  const navigate = useNavigate();
  const [detailBlogs, setDetailBlogs] = useState({});
  const location = useLocation();
  const userName = location.state?.blog.authorId.username;
  useEffect(() => {
    setDetailBlogs(location.state.blog);
  }, [detailBlogs]);
  const date = new Date(detailBlogs.createdAt);
  const formattedDate = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="w-full mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="px-6 py-4">
        <button
          onClick={() => {
            navigate("/");
          }}
          className=" flex gap-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
          Back
        </button>
      </div>
      <div className="flex flex-col gap-8 md:flex-col lg:flex-row">
        <div className=" w-full md:w-full lg:w1/2">
          <div className="w-full rounded overflow-hidden shadow-lg my-4">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{detailBlogs.title}</div>
              <p className="text-gray-700 text-base text-justify">
                {detailBlogs.content}
              </p>
            </div>
            <div className="px-6 py-4">
              <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                <img
                  src="https://picsum.photos/600/400"
                  className="inline-block w-6 h-6 rounded-full"
                />
                <span
                  title={`Created by ${userName}`}
                  className="inline-block cursor-default bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                >
                  {userName}
                </span>
              </div>
              <span
                title={`Created At ${formattedDate}`}
                className="inline-block cursor-default mt-2 bg-gray-200 rounded-full px-3 py-2 text-sm font-semibold text-gray-700"
              >
                {formattedDate}
              </span>
            </div>
          </div>
        </div>

        <div className="md:w-full">
          <img
            className="w-full md:w-full max-h-screen rounded object-cover"
            src={detailBlogs.image}
            alt={detailBlogs.title}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
