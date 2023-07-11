import React from "react";
import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="py-10">
      <div className=" flex flex-col items-center gap-4">
        <h1 className="text-xl bg-black text-white rounded py-2 w-80 text-center">
          Shopping everyday
        </h1>
        <span className=" w-20 rounded-lg h-[4px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
        "We bring you the best shopping experience with a wide variety of high-quality products, along with dedicated customer care service."
        </p>
      </div>
      <div className=" max-w-screen-xl mx-auto py-10 grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 px-4">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
