import React from "react";

const ModalButton = ({ productName, setCardData, resalePrice, img}) => {
  console.log(resalePrice);
  return (
    <>
      <label
        onClick={() => setCardData({productName, resalePrice, img})}
        htmlFor="my-modal-3"
        className="text-white font-semibold inline-flex items-center md:mb-2 lg:mb-0 bg-purple-600 py-2 px-4 rounded cursor-pointer"
      >
        Book Now
      </label>
    </>
  );
};

export default ModalButton;
