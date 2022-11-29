import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";

const Modal = ({ cardData, setCardData }) => {
  const { user } = useContext(AuthContext);

  const handleModalForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const productName = form.productName.value;
    const price = form.price.value;
    const mobileNo = form.mobileNo.value;
    const location = form.location.value;
    const myOrder = {
        name,
        email,
        productName,
        price,
        mobileNo,
        location,
        img: cardData.img
    };
    console.log(myOrder);
    setCardData(null);
  };
  // console.log(user);
  // <label htmlFor="my-modal-3" className="btn">open modal</label>
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Congratulations {user.displayName}
          </h3>
          {/* <p className="py-4">{cardData}</p> */}
          <form onSubmit={handleModalForm}>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                value={user.displayName}
                name="name"
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="email"
                value={user.email}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="productName"
                value={cardData.productName}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="price"
                value={cardData.resalePrice}
                disabled
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Mobile No</span>
              </label>
              <input
                type="text"
                placeholder="Mobile No"
                name="mobileNo"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                placeholder="Location"
                name="location"
                required
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mx-auto mt-5">
              <button
                className="input input-bordered w-full max-w-xs text-white font-semibold items-center md:mb-2 lg:mb-0 bg-purple-600 py-2 px-4 rounded mx-auto"
              >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
