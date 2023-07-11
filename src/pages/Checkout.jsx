import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import BillingDetail from "../components/BillingDetail";
import { productsData, addOrder } from "../api/Api";
import axios from "axios";
import { resetCart } from "../redux/bazarSlice";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isConfirmDeleteOverlayActive, setIsConFirmDeleteOverlayActive] =
    useState(false);

  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmt, settotalAmt] = useState(0);
  const billingRef = useRef();

  useEffect(() => {
    let totalPrice = 0;
    productData.map((product) => {
      totalPrice += product.price * product.quantity;
      return totalPrice;
    });
    settotalAmt(totalPrice.toFixed(2));
  }, [productData]);
  const handleCheckOut = () => {
    // userInfo ? toast.success("Order placed successfully") : toast.error("Please login to checkout");
    // console.log(BillingDetail.handleSubmit());
    //billingRef.current();
    const billingData = billingRef.current.handleSubmit();

    const orderData = {
      ...billingData,
      totalPrice: totalAmt,
      products: productData,
    };

    addOrder(orderData)
      .then((res) => {
        console.log(res);
        dispatch(resetCart());
        toast.success("Order placed successfully");

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to place order, please try again");
      });

    //console.log();

    // addOrder(orderData)
  };
  return (
    <>
      <div>
        {productData.length > 0 ? (
          <div className="max-w-screen-xl mx-auto py-20 flex flex-col md:flex-row px-3 gap-2">
            <BillingDetail billingRef={billingRef} total={totalAmt} />
            <div className=" w-full md:w-1/2 bg-[#f4f2f2] py-6 px-4 rounded border border-slate-200">
              <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
                <h2 className=" text-2xl font-medium">Cart Totals</h2>
                <div className="flex items-center gap-4 text-base">
                  Subtotal:{" "}
                  <span className="font-titleFont font-bold text-lg">
                    $ {totalAmt}
                  </span>
                </div>
                <div className="flex items-start gap-4 text-base flex-row">
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
                </div>
              </div>
              <p className="font-titleFont font-semibold flex justify-between mt-6">
                Total <span className="text-xl font-bold">$ {totalAmt}</span>
              </p>
              <button
                onClick={() => {
                  setIsConFirmDeleteOverlayActive(true);
                }}
                className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 active:bg-white active:text-black active:border active:border-black duration-300"
              >
                place order
              </button>
              {/* {payNow && (
              <div className="w-full mt-6 flex items-center justify-center">
                <StripeCheckout
                  stripeKey="pk_test_51LXpmzBcfNkwYgIPXd3qq3e2m5JY0pvhaNZG7KSCklYpVyTCVGQATRH8tTWxDSYOnRTT5gxOjRVpUZmOWUEHnTxD00uxobBHkc"
                  name="Bazar Online Shopping"
                  amount={totalAmt * 100}
                  label="Pay to bazar"
                  description={`Your Payment amount is $${totalAmt}`}
                  token={payment}
                  email={userInfo.email}
                ></StripeCheckout>
              </div>
            )} */}
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
                      Are you want to Order
                    </h3>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <div className="flex justify-end">
                    <button
                      onClick={() => {
                        handleCheckOut();
                        setIsConFirmDeleteOverlayActive(false);
                      }}
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-600 border border-transparent rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                    >
                      OK
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

export default Checkout;
