import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="">
      <div className=" items-center gap-4 bg-black justify-around py-4 hidden md:flex">
        <div className="flex flex-col items-center gap-1">
          <img
            className=" w-12"
            src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/image_service1.png?1688607702821"
            alt=""
          />
          <span className="text-white">FREE SHIPPING</span>
          <span className="text-white">Free shipping on orders &#62; 399$</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            className=" w-12"
            src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/image_service2.png?1688607702821"
            alt=""
          />
          <span className="text-white">CASH ON DELIVERY</span>
          <span className="text-white">
            Pay when receiving the product (COD)
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            className=" w-12"
            src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/image_service3.png?1688607702821"
            alt=""
          />
          <span className="text-white">VIP CUSTOMER</span>
          <span className="text-white">
            Exclusive benefits for VIP customers
          </span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            className=" w-12"
            src="https://bizweb.dktcdn.net/100/455/315/themes/894917/assets/image_service4.png?1688607702821"
            alt=""
          />
          <span className="text-white">WARRANTY SUPPORT</span>
          <span className="text-white">Exchange and repair at all stores.</span>
        </div>
      </div>
      {/* -------- */}
      <div className=" max-w-screen-xl mx-auto pt-10 grid grid-cols-1 gap-3 lg:gap-5 px-4">
        <span className=" w-20 rounded-lg h-[4px] bg-black"></span>
        <h1 className=" flex gap-3 font-semibold lg:text-4xl text-2xl text-black py-2 ">
          FLASH SALE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-12 h-12"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
        </h1>
      </div>
      {/* <div className=" flex flex-col items-center gap-4">
        <span className=" w-20 rounded-lg h-[4px] bg-black"></span>
        <h1 className="text-xl bg-black text-white rounded py-2 w-80 text-center">
          Shopping everyday
        </h1>
        <p className="max-w-[700px] text-gray-600 text-center">
          "We bring you the best shopping experience with a wide variety of
          high-quality products, along with dedicated customer care service."
        </p>
      </div> */}
      <div className=" max-w-screen-xl mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 px-4">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
