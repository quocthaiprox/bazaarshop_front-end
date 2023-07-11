import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addToCart } from "../redux/bazarSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const _id = product.title;
  const idString = (id) => {
    return String(id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        product: product,
      },
    });
  };
  return (
    <div className=" group relative">
      <div
        onClick={handleDetails}
        className=" w-full h-96 cursor-pointer overflow-hidden"
      >
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="ProductImage"
        />
      </div>
      {/* products description */}
      <div className=" w-full border px-2 py-4">
        {/* title and price */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className=" font-titleFont text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              {product.sale !== 0 && (
                <p className=" line-through text-gray-400">${product.price}</p>
              )}
              <p className=" font-semibold">
                ${(product.price / 100) * (100 - product.sale)}
              </p>
            </div>
            <p
              onClick={() => {
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                );
                toast.success(`Added ${product.title} to cart`);
              }}
              className="absolute z-20 text-gray-400 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 w-fit"
            >
              add to cart
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        {/* category */}
        <div>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
        <div className="absolute top-4 right-0">
          {product.sale > 0 && (
            <p className=" bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale {product.sale}%
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
