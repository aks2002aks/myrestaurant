import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { useEffect, useState } from "react";

export const Footer = ({ restaurantName }) => {
  const currentYear = new Date().getFullYear();
  const [social, setSocial] = useState(null);

  useEffect(() => {
    const fetchRestaurantSocial = async () => {
      const response = await fetch("/api/getRestaurantSocials");
      const data = await response.json();
      console.log(data);
      setSocial(data);
    };
    fetchRestaurantSocial();
  }, []);

  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{restaurantName}</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {currentYear} {restaurantName}
          </p>
          <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <Link
              href={social?.social_media?.instagram ?? "/"}
              className="flex items-center justify-center "
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                <FaInstagram />
              </p>
            </Link>
            <Link
              href={social?.social_media?.facebook ?? "/"}
              className="flex items-center justify-center "
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                <FaFacebook />
              </p>
            </Link>
            <Link
              href={social?.social_media?.twitter ?? "/"}
              className="flex items-center justify-center "
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                <FaTwitter />
              </p>
            </Link>
            <Link
              href={social?.website ?? "/"}
              className="flex items-center justify-center "
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="flex justify-center items-center text-white p-2 md:py-3  md:px-6 text-center rounded-full transition bg-amber-900 hover:bg-amber-700 ">
                <IoIosGlobe />
              </p>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
