import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import Products from "../components/Products";
import { Pagination } from "@mui/material";
import { productsData } from "../api/Api";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const data = productsData(currentPage);
    data.then((res) => {
      setProducts(res.data.products);
      setTotalPages(res.data.pagination.total);
    });
  }, [currentPage]);
  return (
    <div>
      <Banner />
      <Products products={products} />
      <div className="flex justify-center pb-6">
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
    </div>
  );
};
