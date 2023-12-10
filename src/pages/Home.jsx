import React, { useEffect, useState } from "react";
import { Banner } from "../components/Banner";
import Products from "../components/Products";
import { Pagination } from "@mui/material";
import { productsData } from "../api/Api";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const data = productsData(currentPage, 12);
    data.then((res) => {
      setIsLoading(false);
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
      {isLoading && (
        <div>
          <div
            class="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            id="loading-overlay"
          >
            <div className="w-2/3 md:w-2/3 text-center">
              <div
                class="inline-block w-4 h-4 md:w-8 md:h-8 lg:h-8 lg:w-8 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              ></div>
              <span className="ml-4 text-white">
                Please wait for a minute while we set up the data ...
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
