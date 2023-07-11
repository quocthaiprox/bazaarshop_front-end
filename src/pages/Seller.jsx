import React from "react";
import SlideBar from "../components/sellerComponent/SlideBar";
import ManagementProducts from "../components/sellerComponent/ManagementProducts";
import AddProduct from "../components/sellerComponent/AddProduct";
import ManagementUsers from "../components/sellerComponent/ManagementUsers";
import AddBlog from "../components/sellerComponent/AddBlog";
import ManagementBlogs from "../components/sellerComponent/ManagementBlogs";
import ManagementMessages from "../components/sellerComponent/ManagementMessages";
import ManagementOrders from "../components/sellerComponent/ManagementOrders";

const Seller = () => {
  return (
    <div className="flex flew-col flex-1 overflow-hidden gap-2 bg-slate-100">
      <ManagementOrders />
    </div>
  );
};

export default Seller;
