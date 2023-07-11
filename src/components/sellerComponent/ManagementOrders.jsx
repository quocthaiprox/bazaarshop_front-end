import { Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import EditProductOverlay from "./EditProductOverlay";
import EditOrderOverlay from "./EditOrderOverlay";
import { deleteOrderData, orderData } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import ProductCard from './../ProductCard';

const ManagementOrders = () => {
  const [isConfirmDeleteOverlayActive, setIsConFirmDeleteOverlayActive] =
    useState(false);
  const [isConfirmEditOverlayActive, setIsConFirmEditOverlayActive] =
    useState(false);
  const navigate = useNavigate();

  const [item, setItem] = useState({});
  const [orders, setOrder] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const data = orderData(currentPage);
    data
      .then((res) => {
        setOrder(res.data.orders);
        setTotalPages(res.data.pagination.total);
      })
      .catch((error) => {
        console.log("error:", error);
        // if (error.response.status === 401 || error.response.status === 402) {
        navigate("/login-seller");
        // }
      });
  }, [currentPage]);

  const handleDelete = (id) => {
    // Handle delete logic
    console.log(`Deleting item with id ${id}`);

    deleteOrderData(id)
      .then((res) => {
        console.log(res);
        setOrder((prev) => {
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
      <div className="w-full overflow-hidden rounded shadow-xs pb-4">
        <h2 className="py-5 px-1 text-2xl font-bold">Order Management</h2>
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr
                className=" text-center
                  text-xs
                  font-semibold
                  tracking-wide
                  text-left
                  uppercase
                  border-b
                  dark:border-gray-700
                  bg-gray-50
                  dark:bg-slate-200
                "
              >
                <th className="px-4 py-3 ">Full Name</th>
                <th className="px-4 py-3">Address</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Product</th>
                <th className="px-4 py-3">totalPrice</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Note</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody
              className="
                divide-y
                dark:divide-gray-700
                dark:bg-slate-100
                bg-white
                divide-gray-200
              "
            >
              {orders?.map((item) => (
                <tr key={item._id} className=" text-sm text-center">
                  <td className="px-4 py-3">{item.fullName}</td>
                  <td className="px-4 py-3">{item.address}</td>
                  <td className="px-4 py-3">{item.phone}</td>
                  <td className="px-4 py-3">
                    {item.products.map((product, index) => {
                      return (
                        <div key={index} className=" flex flex-row justify-start float-center pb-2 gap-4">
                          <span className="text-left w-[120px]">
                            {index + 1}. {product.title}
                          </span>
                          <span className="text-red-500 float-right">
                            {product.quantity}item
                          </span>
                        </div>
                      );
                    })}
                  </td>
                  <td className="px-4 py-3 text-red-500">{item.totalPrice}</td>
                  <td className="px-4 py-3">{item.statusOrder}</td>
                  <td className="px-4 py-3">{item.orderNote}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center space-x-2">
                      <button
                        className="
                          bg-blue-500
                          hover:bg-blue-700
                          text-white
                          font-bold
                          py-2
                          px-3
                          rounded
                        "
                        onClick={() => {
                          setItem(item);
                          setIsConFirmEditOverlayActive(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="
                          bg-red-500
                          hover:bg-red-700
                          text-white
                          font-bold
                          py-2
                          px-3
                          rounded
                        "
                        onClick={() => {
                          setIsConFirmDeleteOverlayActive(true);
                          setItem(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                      Are you want to delete this order
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        handleDelete(item._id);
                        setIsConFirmDeleteOverlayActive(false);
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
      {isConfirmEditOverlayActive && (
        <EditOrderOverlay
          orders={item}
          setOrder={setOrder}
          isConfirmEditOverlayActive={isConfirmEditOverlayActive}
          setIsConFirmEditOverlayActive={setIsConFirmEditOverlayActive}
        />
      )}
    </>
  );
};

export default ManagementOrders;
