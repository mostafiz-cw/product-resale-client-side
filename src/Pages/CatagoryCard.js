import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../Components/Modal";
import ModalButton from "../Components/ModalButton";
const CatagoryCard = () => {
  const cards = useLoaderData();
  console.log(cards);
  const [cardData, setCardData] = useState(null);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {cards?.map((card) => (
              <div className="p-4 md:w-1/3" key={card._id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={card.img}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {`CATEGORY: ${card.catagory}`}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {card.productName}
                    </h1>
                    <div className="leading-relaxed mb-3 flex justify-between">
                      <p>Resale Price: {card.resalePrice}</p>
                      <p>Orginal Price: {card.orginalPrice}</p>
                    </div>
                    <div className="leading-relaxed mb-3 flex justify-between">
                      <p>Saller Name: {card.sallerName}</p>
                      <p>Location: {card.location}</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 leading-none text-sm">
                        Year Of Use: {card.yearofUse}
                      </span>
                      <span className="text-gray-400 leading-none text-sm">
                        Time: {card.postingTime}
                      </span>
                    </div>
                    <ModalButton
                      setCardData={setCardData}
                      productName={card.productName}
                      resalePrice={card.resalePrice}
                      img={card.img}
                    ></ModalButton>
                    {/* <Link className="text-white font-semibold inline-flex items-center md:mb-2 lg:mb-0 bg-purple-600 py-2 px-4 rounded">
                      Book Now
                    </Link> */}
                  </div>
                </div>
              </div>
            ))}
            {cardData && <Modal cardData={cardData} setCardData={setCardData}></Modal>}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CatagoryCard;
