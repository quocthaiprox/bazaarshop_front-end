import React, { useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import CreateBlogForm from "../components/CreateBlogForm";
import { Pagination } from "@mui/material";
import { blogsData } from "../api/Api";
import Loading from "../components/Loading";

const Blog = () => {
  const [blogs, SetBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const data = blogsData(currentPage);
    data.then((res) => {
      setIsLoading(false);
      SetBlogs(res.data.blogs);
      setTotalPages(res.data.pagination.total);
    });
  }, [currentPage]);

  return (
    <>
      <div className="">
        <div className="py-10">
          <div className=" flex flex-col items-center gap-4">
            <h1 className="text-xl bg-black text-white rounded py-2 w-80 text-center">
              prominent blog
            </h1>
            <span className=" w-20 rounded-lg h-[4px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">
              "We bring you the best shopping experience with a wide variety of
              high-quality products, along with dedicated customer care
              service."
            </p>
          </div>
          <div className=" max-w-screen-xl mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 px-4">
            {/* <BlogItem /> */}
            {blogs.map((blog) => {
              return <BlogItem key={blog._id} blog={blog} />;
            })}
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <Pagination
            count={totalPages}
            variant="outlined"
            shape="rounded"
            page={currentPage}
            onChange={(e, page) => {
              setCurrentPage(page);
            }}
          />
        </div>
      </div>
      <CreateBlogForm />
      {isLoading && <Loading />}
    </>
  );
};

export default Blog;
