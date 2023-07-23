import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/bazarSlice";
import { HiArrowNarrowLeft } from "react-icons/hi";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.product);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex flex-col md:flex-row md:p-4 p-4 lg:p-2 gap-10 ">
        {/* img */}
        <div className=" w-full lg:w-2/5  relative">
          <img
            className="w-full lg:h-[540px]  rounded-sm object-cover"
            src={details.image}
            alt="productImg"
          />
          <div className=" absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black text-white font-semibold font-titleFont px-8 py-2">
                Sale off
              </p>
            )}
          </div>
        </div>
        {/* end img */}

        <div className=" w-full lg:w-3/5 flex flex-col justify-center p-4 lg:p-0 gap-12">
          <div>
            <h2 className=" text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              {details.sale !== 0 && (
                <p className=" line-through font-base text-gray-500">
                  ${details.price}
                </p>
              )}
              <p className="text-2xl font-medium text-gray-900">
                ${(details.price / 100) * (100 - details.sale)}
              </p>
            </div>
          </div>
          {/* icon */}
          <div className=" flex items-center gap-2 text-base">
            <div className=" flex text-yellow-500">
              {Array.from({ length: details.rating }).map((_) => (
                <MdOutlineStar />
              ))}
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className=" text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className=" text-sm">Quantity</p>
              <div className=" flex items-center gap-4 text-sm font-semibold">
                <button
                  onClick={() =>
                    setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                  }
                  className='className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className='className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-500 hover:text-white cursor-pointer duration-300 active:bg-black'
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: (details.price / 100) * (100 - details.sale),
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`Added ${details.title} to cart`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              add to my cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
          <Link to="/">
            <button className="flex items-center justify-center gap-2 text-gray-400 hover:text-black duration-300">
              <span>
                <HiArrowNarrowLeft />
              </span>
              go back shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
