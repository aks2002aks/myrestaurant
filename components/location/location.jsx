import React, { useEffect, useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export const Location = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchRestaurantLocation = async () => {
      const response = await fetch("/api/getRestaurantLocation");
      const data = await response.json();
      console.log(data);
      setLocation(data);
    };
    fetchRestaurantLocation();
  }, []);

  return (
    <div>
      <div className="relative bg-yellow-50">
        <div className="container m-auto  pt-5  lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
              <h1 className=" flex font-bold text-xl md:text-5xl text-yellow-900  lg:w-10/12">
                <MdOutlineAddLocationAlt size={100} />
                <span className="flex ml-2 items-center">
                  {location?.address}
                </span>
              </h1>
              <img src="/main-location.gif" alt="location" className=" mt-4" />
              <Link
                href={`https://www.google.com/maps?q=${location?.latitude},${location?.longitude}`}
                className="flex items-center justify-center "
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                  <FaMapMarkerAlt />
                  <span className="pl-2 text-sm">LOCATE ON GOOGLE MAP</span>
                </p>
              </Link>
            </div>

            <div className="ml-auto z-10 -mb-12 sm:-mb-28 lg:-mb-96 lg:w-6/12">
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
