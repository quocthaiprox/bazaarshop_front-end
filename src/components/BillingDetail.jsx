import React, { useState, useImperativeHandle } from "react";

const BillingDetail = ({ billingRef }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionError, setSelectedOptionError] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [countryError, setCountryError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [cityError, setCityError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = () => {
    let isValid = true;
    if (!firstname.trim()) {
      isValid = false;
      setFirstnameError("Please enter your Firstname");
    } else {
      setFirstnameError("");
    }

    if (!lastname.trim()) {
      isValid = false;
      setLastnameError("Please enter your Lastname");
    } else {
      setLastnameError("");
    }

    if (!country.trim()) {
      isValid = false;
      setCountryError("Please enter your country");
    } else {
      setCountryError("");
    }

    if (!phone.trim()) {
      setPhoneError("Please enter your phone number");
      isValid = false;
    } else if (!/^\d{10}$/.test(phone)) {
      setPhoneError("Please enter a valid 10-digit phone number");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!address.trim()) {
      setAddressError("Please enter your address");
      isValid = false;
    } else {
      setAddressError("");
    }

    if (!selectedOption.trim()) {
      setSelectedOptionError("Please choose the payment option");
      isValid = false;
    } else {
      setSelectedOptionError("");
    }

    if (!city.trim()) {
      setCityError("Please enter your address");
      isValid = false;
    } else {
      setCityError("");
    }

    if (!email.trim()) {
      setEmailError("Please enter your email");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      const formData = {
        fullName: firstname + " " + lastname,
        address,
        country,
        phone,
        address,
        city,
        email,
        orderNote: orderNotes ? orderNotes : "No notes available",
        payment: selectedOption,
      };
      // console.log(formData);
      return formData;
    }
    return null;
  };
  useImperativeHandle(billingRef, () => ({
    handleSubmit,
  }));
  //billingRef.current = handleSubmit();

  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 pb-6 p-4 rounded font-titleFont border-[1px]">
      <h2 className=" text-2xl font-extrabold">Billing Detail</h2>
      <div>
        <div className="p-4 md:p-5 lg:p-6">
          <div className="grid gap-y-3">
            <div className="flex gap-3 lg:flex-row flex-col">
              <div className="w-full">
                <p className=" text-sm">
                  First Name{" "}
                  <span className=" text-red-500">
                    {firstnameError ? firstnameError : "*"}
                  </span>
                </p>
                <input
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400 w-full"
                />
              </div>

              <div className="w-full">
                <p className=" text-sm">
                  Last Name{" "}
                  <span className=" text-red-500">
                    {lastnameError ? lastnameError : "*"}
                  </span>
                </p>
                <input
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                />
              </div>
            </div>
            <div>
              <p className=" text-sm">
                Country{" "}
                <span className=" text-red-500">
                  {countryError ? countryError : "*"}
                </span>
              </p>
            </div>
            <input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
            />
            <div>
              <p className=" text-sm">
                Address{" "}
                <span className=" text-red-500">
                  {addressError ? addressError : "*"}
                </span>
              </p>
            </div>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
            />
            <div>
              <p className=" text-sm">
                City/Town{" "}
                <span className=" text-red-500">
                  {cityError ? cityError : "*"}
                </span>
              </p>
            </div>
            <input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
            />
            <div className="flex gap-3 lg:flex-row flex-col">
              <div className="w-full">
                <p className=" text-sm">
                  Phone{" "}
                  <span className=" text-red-500">
                    {phoneError ? phoneError : "*"}
                  </span>
                </p>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400 w-full"
                />
              </div>

              <div className="w-full">
                <p className=" text-sm">
                  Email{" "}
                  <span className=" text-red-500">
                    {emailError ? emailError : "*"}
                  </span>
                </p>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400  w-full"
                />
              </div>
            </div>
            <div>
              <p className=" text-sm">Order note</p>
            </div>
            <textarea
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              className="focus:border-purple-400 rounded-md border border-slate-300 bg-white py-3 px-4 text-slate-700 outline-none transition placeholder:text-slate-400"
              placeholder="Note about your order, e.g, special noe for delivery"
            />
            <div>
              {/* pay ment */}
              <p className=" text-sm">
                Payment{" "}
                <span className=" text-red-500">
                  {selectedOptionError ? selectedOptionError : "*"}
                </span>
              </p>
            </div>
            {/* ---------------------------- */}
            <div className="lg:flex justify-around center items-center py-4">
              <div className="flex items-center mr-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={selectedOption === "cash"}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  <span className="text-sm">Cash</span>
                </label>
                <img
                  src="https://th.bing.com/th/id/OIP.ZvLGc7TZpymYaXzt-WWR9wHaG7?rs=1&pid=ImgDetMain"
                  alt="Cash"
                  className="w-16 ml-2"
                />
              </div>
              <div className="flex items-center mr-4">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit_card"
                    checked={selectedOption === "credit_card"}
                    onChange={handleOptionChange}
                    className="mr-2"
                  />
                  <span className="text-sm">Credit card</span>
                </label>
                <img
                  src="https://img.icons8.com/dotty/80/bank-card-dollar.png"
                  alt="Credit Card"
                  className="w-16 ml-2"
                />
              </div>
              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="vnpay"
                    checked={selectedOption === "vnpay"}
                    onChange={handleOptionChange}
                    className="mr-2 p-3"
                  />
                  <span className="text-sm">VNPay</span>
                </label>
                <img
                  src="https://th.bing.com/th/id/R.20572cf824e5e6071079152fca8fa2c0?rik=%2fF4x2a8k9kAX%2bA&pid=ImgRaw&r=0&sres=1&sresct=1"
                  alt="VNPay"
                  className="w-16 ml-2"
                />
              </div>
            </div>
          </div>
          <div className="my-3 flex items-center px-3"></div>
        </div>
      </div>
    </div>
  );
};

export default BillingDetail;
