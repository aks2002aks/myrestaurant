import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from "framer-motion";

export const Navbar = ({
  restaurantName,
  handleEventClick,
  handleAwardsClick,
  handleAmbianceClick,
  handleChefClick,
  handleSustainabilityClick,
  handleReviewClick,
  handleHomeClick,
  toggleMenu,
  isMenuOpen,
}) => {
  const words = restaurantName?.split(" ");
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

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
    closed: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <nav className=" fixed z-50 w-full  top-0">
      <div className="container m-auto px-2 md:px-12 lg:px-7 bg-black mt-3 bg-opacity-70 rounded-full">
        <div className="relative flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
            <a
              aria-label="logo"
              className="flex space-x-2 items-center"
              onClick={handleHomeClick}
            >
              <img
                src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png"
                className="w-12"
                alt="tailus logo"
                width="144"
                height="133"
              />
              <span className="text-2xl font-bold text-yellow-900 cursor-pointer">
                {restaurantName ? words[0] : ""}{" "}
                <span className="text-yellow-700">
                  {restaurantName ? words[1] : ""}
                </span>
              </span>
            </a>
            <div className="-mr-2 lg:hidden text-white flex justify-center items-center">
              <button
                aria-label="humburger"
                id="hamburger"
                onClick={toggleMenu}
              >
                <GiHamburgerMenu size={30} />
              </button>
            </div>
          </div>
          <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4">
              <ul className="flex justify-center items-center space-y-4  font-medium text-sm md:flex md:space-y-0 text-white">
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleEventClick}
                  >
                    <span>Events</span>
                  </a>
                </li>
                <Link
                  href={"/menu"}
                  className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                >
                  <span>Menu</span>
                </Link>
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleAwardsClick}
                  >
                    <span>Awards</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleAmbianceClick}
                  >
                    <span>Ambiance</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleChefClick}
                  >
                    <span>Chef</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleSustainabilityClick}
                  >
                    <span>Sustainability</span>
                  </a>
                </li>
                <li>
                  <a
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                    onClick={handleReviewClick}
                  >
                    <span>Review</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l pl-7">
              <Link
                href={`https://www.google.com/maps?q=${location?.latitude},${location?.longitude}`}
                className="flex items-center justify-center py-3 px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="lg:hidden container m-auto px-2 md:px-12 lg:px-7 bg-black mt-3 bg-opacity-70 rounded-full text-white"
          initial="closed"
          animate="open"
          variants={menuVariants}
        >
          <div className="relative flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
            <div className="w-full flex flex-wrap justify-end items-center space-y-6 p-2  lg:rounded-full  md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
              <div className={`w-full flex md:p-2 justify-center items-center`}>
                <ul className="flex flex-wrap space-x-6  md:space-x-0 justify-center items-center">
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleEventClick}
                    >
                      <span>Events</span>
                    </a>
                  </li>
                  <Link
                    href={"/menu"}
                    className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                  >
                    <span>Menu</span>
                  </Link>
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleAwardsClick}
                    >
                      <span>Awards</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleAmbianceClick}
                    >
                      <span>Ambiance</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleChefClick}
                    >
                      <span>Chef</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleSustainabilityClick}
                    >
                      <span>Sustainability</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="block md:px-4 transition hover:text-yellow-700 cursor-pointer"
                      onClick={handleReviewClick}
                    >
                      <span>Review</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};
