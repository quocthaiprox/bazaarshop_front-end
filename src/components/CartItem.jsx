import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineClose } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import {
  decrementQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/bazarSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.bazar.productData);

  const [isConfirmDeleteOverlayActive, setIsConFirmDeleteOverlayActive] =
    useState(false);

  return (
    <>
      <div className=" w-full md:w-2/3 md:pr-10">
        <div className=" w-full">
          <h2 className=" font-titleFont text-2xl">Shopping cart</h2>
        </div>
        <div>
          {productData.map((product) => {
            return (
              <div
                key={product._id}
                className=" flex items-center flex-col lg:flex-row justify-center gap-10 mt-6"
              >
                <div className="flex flex-row lg:flex-row items-center justify-center gap-2 w-full">
                  <div className=" flex items-center gap-2">
                    <div className="w-8">
                      <MdOutlineClose
                        onClick={() =>
                          dispatch(deleteItem(product._id)) &
                          toast.error(`${product.title} is removed`)
                        }
                        className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                      />
                    </div>
                    <img
                      className=" md:w-32 w-24 aspect-square object-cover rounded-sm"
                      src={product.image}
                      alt="productImg"
                    />
                  </div>
                  {/* <div className="w-96">dawda</div> */}
                  <h2 className="flex-1 text-clip">{product.title}</h2>
                  <p className="px-4 p-5 box-content">${product.price}</p>
                </div>
                <div className="flex flex-row items-center justify-center gap-2">
                  <div className="flex items-center justify-between text-gray-500 gap-4 border p-3">
                    <p className="text-sm">Quantity</p>
                    <div className="flex items-center gap-4 text-sm font-semibold">
                      <span
                        onClick={() =>
                          dispatch(
                            decrementQuantity({
                              _id: product._id,
                              title: product.title,
                              image: product.image,
                              price: product.price,
                              quantity: 1,
                              description: product.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        -
                      </span>
                      {product.quantity}
                      <span
                        onClick={() =>
                          dispatch(
                            increamentQuantity({
                              _id: product._id,
                              title: product.title,
                              image: product.image,
                              price: product.price,
                              quantity: 1,
                              description: product.description,
                            })
                          )
                        }
                        className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <p className="w-14">${product.quantity * product.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            setIsConFirmDeleteOverlayActive(true);
          }}
          className="bg-red-500 text-white mt-8 ml-7 mx-auto py-1 px-6 hover:bg-red-800 duration-300"
        >
          Reset Card
        </button>
        <Link to="/">
          <button className="mt-8 ml-7 mb-4 flex items-center gap-1 text-gray-400 hover:text-black duration-300">
            <span>
              <HiOutlineArrowLeft />
            </span>
            go shopping
          </button>
        </Link>
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
                      Are you want to reset cart
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() =>
                        dispatch(resetCart()) &
                        toast.error("Your Cart is Empty!")
                      }
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-red-600 border border-transparent rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                    >
                      Clear All
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

export default CartItem;
