import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myProductCard, setMyProductcard] = useState([]);
  useEffect(() => {
    fetch(
      `https://a12-used-products-resalling-app-server-side.vercel.app/dashboard/myproducts/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyProductcard(data);
      })
      .catch((err) => console.error(err));
  }, [user.email]);

  console.log(myProductCard);
  return (
    <div>
      <p className="flex justify-center text-2xl font-semibold">
        This is my products
      </p>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {myProductCard.map((productCard) => (
              <div className="p-4 md:w-1/3" key={productCard._id}>
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src={productCard.url}
                    alt="blog"
                  />
                  <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                      {`CATEGORY: ${productCard.catagorys}`}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {productCard.productName}
                    </h1>
                    <div className="leading-relaxed mb-3 flex justify-between">
                      <p>{`Resale Price: ${productCard.resalePrice}`}</p>
                      <p>{`Orginal Price: ${productCard.originalPrice}`}</p>
                    </div>
                    <div className="leading-relaxed mb-3 flex justify-between">
                      <p>{`Saller Name: ${productCard.sellerName}`} </p>
                      <p>{`Location: ${productCard.location}`}</p>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400 leading-none text-sm">
                        {`Year Of Use: ${productCard.yearOfUse}`}
                      </span>
                      <span className="text-gray-400 leading-none text-sm">
                        {`Condition: ${productCard.conditions}`}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <label className="text-white font-semibold inline-flex items-center md:mb-2 lg:mb-0 bg-purple-600 py-2 px-4 rounded cursor-pointer">
                        Advertise
                      </label>
                      <label className="text-white font-semibold inline-flex items-center md:mb-2 lg:mb-0 bg-red-600 py-2 px-4 rounded cursor-pointer">
                        Delele
                      </label>
                    </div>
                    {/* <Link className="text-white font-semibold inline-flex items-center md:mb-2 lg:mb-0 bg-purple-600 py-2 px-4 rounded">
                        Book Now
                      </Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProducts;
