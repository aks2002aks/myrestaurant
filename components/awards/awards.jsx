import React, { useEffect, useState } from "react";
import { MdOutlineAddLocationAlt } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export const Awards = ({awardsRef}) => {
  const [awards, setAwards] = useState(null);

  useEffect(() => {
    const fetchRestaurantAwards = async () => {
      const response = await fetch("/api/getRestaurantAwards");
      const data = await response.json();
      console.log(data);
      setAwards(data);
    };
    fetchRestaurantAwards();
  }, []);

  return (
    <div ref={awardsRef}>
      <div className="relative bg-yellow-50">
        <div className="container m-auto px-6  pt-10 md:px-12 lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className="relative lg:w-6/12 lg:py-12 xl:py-18">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 p-5 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-300">
                {awards &&
                  awards.map((award, index) => (
                    <div
                      key={index}
                      className="flex bg-yellow-900 p-4 rounded-xl"
                    >
                      <div className="flex flex-col  w-1/3">
                        <img
                          src={"/award.png"}
                          className="relative w-28 h-20"
                          alt="food illustration"
                          loading="lazy"
                          width="4500"
                          height="4500"
                        />
                        <p className="text-center text-lg font-semibold text-white">
                          {award.year}
                        </p>
                      </div>
                      <div className="flex flex-col w-2/3">
                        <h3 className="text-lg font-semibold text-white">
                          {award.award}
                        </h3>
                        <p className="text-gray-300">{award.organization}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <img
                src={"/award-video.gif"}
                className="relative"
                alt="food illustration"
                loading="lazy"
                width="4500"
                height="4500"
              />
            </div>
            <div className="ml-auto z-10 pl-4 -mb-12 sm:-mb-28 lg:-mb-96 lg:w-6/12">
              <img
                src={"/big-award.png"}
                className="relative "
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
