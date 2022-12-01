import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {
  const [catagory, setCatagory] = useState("");
  const [condition, setCondition] = useState("");
  const {user} = useContext(AuthContext);
   // jump others page after log in
   const navigate = useNavigate();

  const imgHostKey = process.env.REACT_APP_imgbb_key;

  // imgbb post function
  const imgBb = (image, addProductObj) => {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          addProductObj.url = imgData.data.url;
          //   console.log(imgData.data.url);
          //   console.log(addProductObj);
          // post add products object to databased
          fetch("https://a12-used-products-resalling-app-server-side.vercel.app/dashboard/addproduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(addProductObj),
          })
            .then((res) => res.json())
            .then((data) => {
                if(data.acknowledged){
                    navigate("/dashboard/myproducts");
                }
            })
            .catch((err) => console.error(err));
        }
      })
      .catch((err) => console.error(err));
  };

  const handleAddproductSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image;
    const sellerName = form.sellerName.value;
    const productName = form.productName.value;
    const mobileNo = form.mobileNo.value;
    const resalePrice = form.resalePrice.value;
    const location = form.location.value;
    const originalPrice = form.originalPrice.value;
    const yearOfUse = form.yearOfUse.value;
    const yearsOfPurchase = form.yearsOfPurchase.value;
    const catagorys = catagory;
    const conditions = condition;
    const message = form.message.value;
    const addProductObj = {
      sellerName,
      productName,
      mobileNo,
      resalePrice,
      location,
      originalPrice,
      yearOfUse,
      yearsOfPurchase,
      catagorys,
      conditions,
      message,
      email: user?.email,
      role: "Seller"
    };
    imgBb(image.files[0], addProductObj);
    // console.log(addProductObj);

    // console.dir(image.files[0]);
  };

  return (
    <div>
      <p className="flex justify-center text-2xl font-semibold">Add product</p>
      <>
        {/* component */}
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form onSubmit={handleAddproductSubmit}>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="fName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Seller Name
                    </label>
                    <input
                      type="text"
                      name="sellerName"
                      id="fName"
                      placeholder="Seller Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="lName"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productName"
                      id="lName"
                      placeholder="Product Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              {/* <div className="mb-5">
                <label
                  htmlFor="guest"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  How many guest are you bringing?
                </label>
                <input
                  type="text"
                  name="guest"
                  id="guest"
                  placeholder={5}
                  required
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div> */}
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Mobile Number
                    </label>
                    <input
                      type="number"
                      required
                      name="mobileNo"
                      id="date"
                      placeholder="Mobile Number"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Location
                    </label>
                    <input
                      type="text"
                      required
                      name="location"
                      placeholder="Location"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Resale Price
                    </label>
                    <input
                      type="number"
                      required
                      name="resalePrice"
                      id="date"
                      placeholder="Resale Price"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Original Price
                    </label>
                    <input
                      type="number"
                      required
                      name="originalPrice"
                      placeholder="Original Price"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="date"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Year of Use
                    </label>
                    <input
                      type="number"
                      required
                      name="yearOfUse"
                      id="date"
                      placeholder="Year of Use"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      htmlFor="time"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Years of Purchase
                    </label>
                    <input
                      type="number"
                      required
                      name="yearsOfPurchase"
                      placeholder="Years of Purchase"
                      id="time"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Catagory
                </label>
                <select
                  value={catagory}
                  onChange={(e) => setCatagory(e.target.value)}
                  className="w-full px-3 rounded-md border border-[#e0e0e0] py-4
                  focus:border-[#6A64F1]"
                >
                  <option>Dressing Table</option>
                  <option>Sofa Cum Bed</option>
                  <option>Dining Set</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Condition
                </label>
                <select
                  value={condition}
                  onChange={(e) => setCondition(e.target.value)}
                  className="w-full px-3 rounded-md border border-[#e0e0e0] py-4
                  focus:border-[#6A64F1]"
                >
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">
                  Photo
                </label>
                <input type="file" name="image" id="image" />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="message"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  name="message"
                  id="message"
                  required
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  defaultValue={""}
                />
              </div>

              <div>
                <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
};

export default AddProduct;
