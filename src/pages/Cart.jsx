import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cartPhoto, payment } from "../assets";

const Cart = () => {
  const navigate = useNavigate();
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, settotalAmt] = useState(0);
  useEffect(() => {
    let totalPrice = 0;
    productData.map((product) => {
      totalPrice += product.price * product.quantity;
      return totalPrice;
    });
    settotalAmt(totalPrice.toFixed(2));
  }, [productData]);

  const handleCheckOutClick = () => {
    if (!userInfo) {
      toast.error("Please login to checkout");
    } else {
      navigate("/checkout");
    }
  };
  return (
    <div>
      <img className="w-full h-60 object-cover" src={cartPhoto} alt="cartImg" />
      {productData.length > 0 ? (
        <div className=" max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row px-3">
          <CartItem />
          <div className=" w-full md:w-1/3 bg-[#f4f2f2] py-6 px-4 border border-slate-200">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className=" text-2xl font-medium">Cart Totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  $ {totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base flex-row">
                <p>Product:</p>
                <div className="w-full flex flex-col text-sm lg:text-base">
                  {productData.map((product, index) => (
                    <div
                      className="flex flex-row gap-2 justify-between"
                      key={index}
                    >
                      <p>
                        {index + 1}. {product.title}
                      </p>
                      <p className=" font-semibold">
                        ${Number(product.price * product.quantity)}
                      </p>
                    </div>
                  ))}
                </div>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">$ {totalAmt}</span>
            </p>
            <button
              onClick={() => {
                handleCheckOutClick();
              }}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-white active:text-black active:border active:border-black duration-300"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-screen-xl mx-auto py-10 flex flex-col items-center gap-2 justify-center">
          <img
            className=" w-2/3 lg:w-1/3 md:w-1/3"
            src="https://th.bing.com/th/id/R.afa6a28d0ee0b5e7d55b7a5aecdfedec?rik=eOl3Z%2bU0XvmYlw&riu=http%3a%2f%2fiticsystem.com%2fimg%2fempty-cart.png&ehk=0omil1zRH7T3Pb5iTzvueamUQLSSb55vgY7dLFF8Bl8%3d&risl=&pid=ImgRaw&r=0"
            alt="EmptyCartImage"
          />
          <p className="lg:text-xl text-lg md:text-base text-center text-yellow-500 font-titleFont font-semibold">
            Please go back to Shopping and add products to Cart.
          </p>
          <Link to="/">
            <button className="flex items-center gap-1 text-gray-400 hover:text-black duration-300">
              <span>
                <HiArrowNarrowLeft />
              </span>
              go shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
