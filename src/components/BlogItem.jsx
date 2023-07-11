import React from "react";
import { useNavigate } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const navigate = useNavigate();
  const date = new Date(blog.createdAt);
  const formattedDate = date.toLocaleString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const _id = blog._id;
  const handleDetails = () => {
    navigate(`/blog/${_id}`, {
      state: {
        blog: blog,
      },
    });
  };
  return (
    <div>
      <div
        className=" group relative"
        onClick={() => {
          handleDetails();
        }}
      >
        <div className=" w-full h-96 cursor-pointer overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 duration-500"
            src={blog.image}
            alt="BlogImage"
          />
        </div>
        <div className=" w-full border px-2 py-4">
          <div className="flex justify-between items-center gap-2 mb-2 ">
            <h2 className=" twolinesetting break-all w-fit font-titleFont text-base font-bold">
              {blog.title}
            </h2>
            <div className="border-l-[1px] border-gray-400 pl-2  flex justify-end gap-2 relative overflow-hidden w-fit text-sm ">
              <p className=" text-gray-400">{formattedDate}</p>
            </div>
          </div>
          {/* category */}
          <div>
            <p className=" text-sm text-gray-500">
              by {blog.authorId.username}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
