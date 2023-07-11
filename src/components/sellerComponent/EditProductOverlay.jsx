import React, { useState } from "react";
import { addProduct, editProduct } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditProductOverlay = ({
  products,
  setProducts,
  isConfirmEditOverlayActive,
  setIsConFirmEditOverlayActive,
}) => {
  const [title, setTitle] = useState(products.title);
  const [price, setPrice] = useState(products.price);
  const [sale, setSale] = useState(products.sale);
  const [category, setCategory] = useState(products.category);
  const [image, setImage] = useState(products.image);
  const [quantity, setQuantity] = useState(products.quantity);
  const [description, setDescription] = useState(products.description);
  const [isNew, setIsNew] = useState(products.isNew);
  const [rating, setRating] = useState(products.rating);

  const [titleError, setTitleError] = useState("");
  const [priceError, setPriceError] = useState("");
  const [saleError, setSaleError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [imageError, setImageError] = useState("");
  const [quantityError, setQuantityError] = useState("");
  const [ratingError, setRatingError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    let isValid = true;
    if (!title.trim()) {
      setTitleError("Please enter your product title");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!typeof price === "number" && price <= 0) {
      setPriceError("Field Price must be a number and greater than 0");
      isValid = false;
    } else {
      setPriceError("");
    }
    console.log(priceError);

    if (!typeof sale === "number" && sale < 0) {
      setSaleError("Field Sale must be a number");
      isValid = false;
    } else {
      setSaleError("");
    }
    if (
      (!category.trim() && !category === "women") ||
      !category === "men" ||
      !category === "kid" ||
      !category === "other"
    ) {
      setCategoryError("Field Category must be women/men/kid/other");
      isValid = false;
    } else {
      setCategoryError("");
    }

    if (!image.trim()) {
      setImageError("Please enter your product image link");
      isValid = false;
    } else {
      setImageError("");
    }
    if (!typeof quantity === "number" && quantity <= 0) {
      setQuantityError("Field Quantity must be a number and greater than 0");
      isValid = false;
    } else {
      setQuantityError("");
    }

    if (!typeof rating === "number" && rating <= 0 && rating > 5) {
      setRatingError("Field Rating must be a number between 1 and 5");
      isValid = false;
    } else {
      setRatingError("");
    }

    if (isValid) {
      const newProduct = {
        title,
        price,
        sale,
        category,
        image,
        quantity,
        description,
        isNew,
        rating,
      };

      const handleEdit = (id) => {
        console.log(`Editing item with id ${id}`);
        editProduct(products._id, newProduct)
          .then((res) => {
            console.log(res);
            setProducts((prev) => {
              const product = prev.filter((z) => z._id !== newProduct._id);
              return [...product];
            });
            toast.success(`Update ${products.title} successfully`);
            setIsConFirmEditOverlayActive(false);
            navigate("/seller");
          })
          .catch((error) => {
            console.log(error);
            navigate("/login-seller");
          });
      };
      handleEdit(products._id);
    }
  };
  return (
    <div className="mt-5">
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
          &#8203;
          <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div className="mt-5">
              <div className="p-4 md:p-5 lg:p-6">
                <div className="grid gap-y-3 pb-3">
                  <div className="flex gap-3 lg:flex-row flex-col">
                    <div className="w-full">
                      <p className=" text-sm">
                        Product Title{" "}
                        <span className=" text-red-500">
                          {titleError ? titleError : "*"}
                        </span>
                      </p>
                      <input
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400 w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className=" text-sm">
                        Price{" "}
                        <span className=" text-red-500">
                          {priceError ? priceError : "*"}
                        </span>
                      </p>
                      <input
                        type="text"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 lg:flex-row flex-col">
                    <div className="w-full">
                      <p className=" text-sm">
                        Sale{" "}
                        <span className=" text-red-500">
                          {saleError ? saleError : "*"}
                        </span>
                      </p>
                      <input
                        value={sale}
                        onChange={(e) => {
                          setSale(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400 w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className=" text-sm">
                        Category{" "}
                        <span className=" text-red-500">
                          {categoryError ? categoryError : "*"}
                        </span>
                      </p>
                      <input
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 pr- text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <p className=" text-sm">
                      Link of image{" "}
                      <span className=" text-red-500">
                        {imageError ? imageError : "*"}
                      </span>
                    </p>
                  </div>
                  <input
                    value={image}
                    onChange={(e) => {
                      setImage(e.target.value);
                    }}
                    className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                  />
                  <div className="flex gap-3 lg:flex-row flex-col">
                    <div className="w-full">
                      <p className=" text-sm">
                        Quantity{" "}
                        <span className=" text-red-500">
                          {quantityError ? quantityError : "*"}
                        </span>
                      </p>
                      <input
                        value={quantity}
                        onChange={(e) => {
                          setQuantity(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400 w-full"
                      />
                    </div>

                    <div className="w-full">
                      <p className=" text-sm">
                        Rating{" "}
                        <span className=" text-red-500">
                          {ratingError ? ratingError : "*"}
                        </span>
                      </p>
                      <input
                        value={rating}
                        onChange={(e) => {
                          setRating(e.target.value);
                        }}
                        className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                      />
                    </div>
                    <div className="w-1/4 ">
                      <p className=" text-sm">
                        isNew <span className=" text-red-500">*</span>
                      </p>
                      <input
                        checked={isNew}
                        onChange={() => {
                          setIsNew(!isNew);
                        }}
                        name=""
                        type="checkbox"
                        className=" checked:bg-blue-500 w-full mt-4 scale-150"
                      />
                    </div>
                  </div>
                  <div>
                    <p className=" text-sm">Description</p>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
                    placeholder="Your product's description"
                  />
                </div>
                <div className="my-3 flex items-center px-3"></div>
              </div>
            </div>
            <div className="">
              <div className="flex justify-end">
                <button
                  onClick={() => {
                    handleSubmit();
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
