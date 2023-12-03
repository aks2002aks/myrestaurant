import React from "react";
import Link from "next/link";
import { MdRestaurantMenu } from "react-icons/md";

export const ShortMenu = () => {
  return (
    <div>
      <div className="relative bg-white">
        <div className="container m-auto  pt-10 px-2  lg:px-7">
          <div className="flex items-center justify-center flex-wrap px-2 md:px-0">
            <div className=" lg:w-6/12 lg:py-24 xl:py-32 pb-10">
              <p className="flex  ml-2 items-center text-center  justify-center  text-3xl md:text-5xl font-bold text-yellow-900">
                MENU
              </p>
              <div className=" grid grid-cols-2 gap-8 justify-center  pt-10 ">
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`https://source.unsplash.com/random/?italiancusine`}
                    alt="signature_dish"
                    className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover mx-auto lg:mx-0"
                  />
                  <p className="text-center font-bold text-xl text-yellow-900">
                    Italian Cusine
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`https://source.unsplash.com/random/?mexicanfood`}
                    alt="signature_dish"
                    className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover mx-auto lg:mx-0"
                  />
                  <p className="text-center font-bold text-xl text-yellow-900">
                    Mexican Cusine{" "}
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`https://source.unsplash.com/random/?indianfood`}
                    alt="signature_dish"
                    className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover mx-auto lg:mx-0"
                  />
                  <p className="text-center font-bold text-xl text-yellow-900">
                    Indian Cusine
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <img
                    src={`https://source.unsplash.com/random/?americanfood`}
                    alt="signature_dish"
                    className="rounded-full w-24 h-24 lg:w-32 lg:h-32 object-cover mx-auto lg:mx-0"
                  />
                  <p className="text-center font-bold text-xl text-yellow-900">
                    American Cusine
                  </p>
                </div>
                <Link
                  href={`/menu`}
                  className="flex items-center justify-center col-span-2 pt-5"
                >
                  <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                    <MdRestaurantMenu />
                    <span className="pl-2 text-sm">Browse Menu</span>
                  </p>
                </Link>
              </div>
            </div>

            <div className="ml-auto flex justify-center lg:w-6/12  ">
              <img
                src="/chef.png"
                className=" lg:w-full  w-[60%]"
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
