import React from "react";

const Testimonials = () => {
  return (
    <div>
      <div className="py-16">
        <div className="xl:container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <h2 className="mb-12 text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What's our customers say
          </h2>
          <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
            <div className="row-span-2 rounded-3xl border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex h-full flex-col justify-center space-y-4">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src="https://randomuser.me/api/portraits/men/44.jpg"
                  alt="user avatar"
                  height={220}
                  width={220}
                  loading="lazy"
                />
                <p className="md:text-xl">
                  <span className="font-serif">"</span>I especially enjoy the
                  active Community. Hand-picked lists are a wonderful forum to
                  showcase items, to interact with other sellers, and to promote
                  sales. I rate them an A ++++.{" "}
                  <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Doe
                  </h6>
                  <span className="text-xs text-gray-500">UI Designer</span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://randomuser.me/api/portraits/women/24.jpg"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">"</span>I have purchased
                  furniture from here before and it lasted 10 years. So when we
                  went back to replace our bedroom set we had no regrets. Bill
                  was great on selling us just what we wanted (minus my bad
                  choice on the mattress not too sure what I was thinking). Our
                  bedroom set arrived 3 weeks early and after delivery when I
                  realized my mistake with the matesss choice Justin did not
                  hesitate to make sure I was happy. He allowed me to exchange
                  the mattress and even delivered the new one the same day. The
                  customer service here matches the quality of the furniture
                  ABSOLUTELY THE BEST!!!!! <span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Amenda Carny
                  </h6>
                  <span className="text-xs text-gray-500">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-3xl sm:flex sm:space-x-8 border border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-8 text-center shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <img
                className="mx-auto h-20 w-20 rounded-full"
                src="https://randomuser.me/api/portraits/men/10.jpg"
                alt="user avatar"
                height={220}
                width={220}
                loading="lazy"
              />
              <div className="mt-4 space-y-4 text-center sm:mt-0 sm:text-left">
                <p>
                  <span className="font-serif">"</span>Purchased a lift chair in
                  the store a couple of years ago. (Dad loves the chair!)
                  Required a replacement for a frayed electrical cord and TBF
                  kindly contacted the manufacturer to obtain one. I received
                  numerous updates via email and phone as to progress in
                  obtaining the part. Good old fashioned customer service which
                  is rarely found.<span className="font-serif">"</span>
                </p>
                <div>
                  <h6 className="text-lg font-semibold leading-none">
                    Jane Ali
                  </h6>
                  <span className="text-xs text-gray-500">Accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
