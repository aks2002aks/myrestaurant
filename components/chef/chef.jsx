import React from "react";
import { useState, useEffect } from "react";

export const Chef = ({chefRef}) => {
  const [chef, setChef] = useState(null);

  useEffect(() => {
    const fetchRestaurantChef = async () => {
      const response = await fetch("/api/getRestaurantChef");
      const data = await response.json();
      console.log(data);
      setChef(data);
    };
    fetchRestaurantChef();
  }, []);

  return (
    <div ref={chefRef}>
      <div className="relative bg-yellow-50">
        <div className="container m-auto  pt-10 px-2 md:pt-28 md:px-12 lg:pt-[8.8rem] lg:px-7">

          <div className="flex items-center justify-center md:justify-start flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32 pb-10">
              <div className=" flex justify-center  flex-col  text-yellow-900  lg:w-10/12">
                <p className="flex  ml-2 items-center text-center  justify-center lg:justify-start text-3xl md:text-5xl font-bold ">
                  Meet Chef
                </p>
                <p className="flex ml-2 items-center    justify-center lg:justify-start text-lg md:text-3xl pt-2 ">
                  {chef?.name}
                </p>
                <p className="flex ml-2 items-center lg:text-left text-center  justify-center lg:justify-start text-sm md:text-xl pt-2 ">
                  {chef?.bio}
                </p>
              </div>
              <div className="flex flex-col justify-center lg:justify-start pt-10 lg:pl-24">
                <p className="py-4 lg:pl-3 font-bold text-center lg:text-left">
                  Signature Dish
                </p>
                <img
                  src={`https://source.unsplash.com/random/?${chef?.signature_dish}`}
                  alt="signature_dish"
                  className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover mx-auto lg:mx-0"
                />
                <p className="py-4 text-yellow-900 text-xl  font-semibold lg:-ml-7  text-center lg:text-left">
                  {chef?.signature_dish}
                </p>
              </div>
            </div>

            <div className="ml-auto  lg:w-6/12  ">
              <img
                src="/chef-2.png"
                className=" w-full"
                alt="food illustration"
                loading="lazy"
                width="5500"
                height="5500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
