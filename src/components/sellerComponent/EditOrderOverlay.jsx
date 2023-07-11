import React, { useEffect, useState } from "react";
import { addProduct, editProduct, editStatusOrder } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProductOverlay = ({
  orders,
  setOrder,
  setIsConFirmEditOverlayActive,
}) => {
  const [valueSelected, setValueSelected] = useState("");

  const navigate = useNavigate();
  const handleEdit = (id) => {
    console.log(`Editing item with id ${id}`);
    const newOrder = { ...orders };
    newOrder.statusOrder = valueSelected;

    editStatusOrder(orders._id, newOrder)
      .then((res) => {
        setOrder((prev) => {
          const order = prev.filter((z) => z._id === newOrder._id);
          return [...order];
        });

        toast.success(`Update status Order successfully`);
        setIsConFirmEditOverlayActive(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login-seller");
      });
  };
  return (
    <div className="mt-5">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center w-fit mx-auto justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="mb-8">
              <h1 className="text-base font-semibold">
                Choose the order status
              </h1>
              <select
                defaultValue={orders.statusOrder}
                onChange={(e) => setValueSelected(e.target.value)}
                class="tw-w-full tw-rounded p-2 tw-border tw-border-gray-300 tw-py-2 tw-pl-3 tw-pr-10 tw-shadow-sm"
              >
                {" "}
                <option disabled selected class="tw-text-gray-400">
                  Select status
                </option>{" "}
                <option value="pending" class="tw-text-orange-400">
                  {" "}
                  Pending{" "}
                </option>{" "}
                <option value="processing" class="tw-text-amber-400">
                  {" "}
                  Processing{" "}
                </option>{" "}
                <option value="processed" class="tw-text-green-400">
                  {" "}
                  Processed{" "}
                </option>{" "}
              </select>
            </div>
            <div className="">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handleEdit(orders._id);
                  }}
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-600 border border-transparent rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 sm:text-sm"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsConFirmEditOverlayActive(false)}
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
  );
};

export default EditProductOverlay;
