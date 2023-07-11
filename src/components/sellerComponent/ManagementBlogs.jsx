import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogsData, deleteBlogsData } from "../../api/Api";
import { Pagination } from "@mui/material";

const ManagementBlogs = () => {
  const [isConfirmDeleteOverlayActive, setIsConFirmDeleteOverlayActive] =
    useState(false);
  const [item, setItem] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();
  useEffect(() => {
    const data = blogsData(currentPage);
    data
      .then((res) => {
        setBlogs(res.data.blogs);
        setTotalPages(res.data.pagination.total);
      })
      .catch((err) => {
        console.log("error: ", err);
        navigate("/login-seller");
      });
  }, [currentPage]);

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Deleting item with id ${id}`);
    deleteBlogsData(id)
      .then((res) => {
        console.log(res);
        setBlogs((prev) => {
          return prev.filter((z) => z._id !== id);
        });
      })
      .catch((error) => {
        console.log("error:", error);
        navigate("/login-seller");
      });
  };

  return (
    <>
      <div className=" flex flex-col container mx-auto py-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="">
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm border-b border-gray-600 bg-gray-100">
                Author
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm border-b border-gray-600 bg-gray-100">
                Title
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm border-b border-gray-600 bg-gray-100">
                Image
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm border-b border-gray-600 bg-gray-100">
                Content
              </th>
              <th className="text-center py-3 px-4 uppercase font-semibold text-sm border-b border-gray-600 bg-gray-100">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="hover:bg-gray-100 text-sm">
                <td className="py-4 px-6 border-b border-gray-600">
                  {blog.authorId.username}
                </td>
                <td className="py-4 px-6 border-b border-gray-600">
                  {blog.title}
                </td>
                <td className="py-4 px-6 border-b border-gray-600">
                  <img src={blog.image} alt={blog.title} />
                </td>
                <td className="py-4 px-6 border-b border-gray-600">
                  {blog.content}
                </td>
                <td className="py-4 px-6 border-b border-gray-600">
                  <button
                    
                    onClick={() => {
                      setItem(blog);
                      setIsConFirmDeleteOverlayActive(true);
                    }}
                    className="text-white bg-red-500 hover:bg-red-600 py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {totalPages > 1 && (
          <div className="flex justify-center py-6">
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
        )}
      </div>
      {isConfirmDeleteOverlayActive && (
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
                      setIsConFirmDeleteOverlayActive(false);
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
                      Are you want to delete {item.title}
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                    onClick={() => {
                       handleDelete(item._id)
                       setIsConFirmDeleteOverlayActive(false)
                    }}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => {
                        
                        setIsConFirmDeleteOverlayActive(false);
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

export default ManagementBlogs;
