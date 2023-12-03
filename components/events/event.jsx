import React from "react";
import { useEffect, useState } from "react";

export const Event = ({ restaurantName,eventRef }) => {
  const [events, setEvents] = useState(null);
  const currentDate = new Date();
  const startDate = new Date();
  startDate.setDate(currentDate.getDate() - 15);
  const endDate = new Date();
  endDate.setDate(currentDate.getDate() + 15);

  useEffect(() => {
    const fetchRestaurantEvents = async () => {
      const response = await fetch("/api/getRestaurantEvents");
      const data = await response.json();
      const filteredEvents = data.upcoming_events.filter((event) => {
        const eventDate = new Date(event.date);
        console.log(eventDate, startDate, endDate);
        return eventDate >= startDate && eventDate <= endDate;
      });
      console.log(filteredEvents);
      setEvents(filteredEvents);
    };
    fetchRestaurantEvents();
  }, []);

  const getMonth = (month) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return monthNames[parseInt(month) - 1];
  };

  const getDate = (date) => {
    const [year, month, day] = date.split("-");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const shortMonth = getMonth(month);
    return { year, month: shortMonth, day };
  };

  return (
    <div className="relative bg-white pb-10 lg:pb-20" ref={eventRef}>
      <div className="container m-auto px-6 lg:pt-20 pt-10 md:px-12 lg:px-7">
        <div className="pb-5">
          <p className="flex  ml-2 items-center text-center  justify-center lg:justify-start text-3xl md:text-5xl font-bold ">
            Events
          </p>
        </div>
        <div className="flex flex-col space-y-8">
          <div className="lg:flex shadow rounded-lg border border-gray-400">
            <div className="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full ">
              <div className="text-center tracking-wide">
                <div className="text-white font-bold text-4xl ">
                  {currentDate.getDate()}
                </div>
                <div className="text-white font-normal text-2xl">
                  {getMonth(currentDate.getMonth() + 1)}
                </div>
              </div>
            </div>
            <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
              <div className="flex flex-row lg:justify-start justify-center">
                <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  <i className="far fa-clock"></i> 7:30 PM
                </div>
                <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  Organiser : {restaurantName}
                </div>
              </div>
              <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                Party with Guru Randhawa and DJ Chetas
              </div>

              <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                Join the ultimate party vibe with Guru Randhawa and DJ Chetas,
                where music and celebration unite.
              </div>
            </div>
            <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0 rounded-lg">
              <span className="tracking-wider text-gray-600 bg-green-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                Live
              </span>
            </div>
          </div>
          {events?.map((event, index) => (
            <div
              className="lg:flex shadow rounded-lg border border-gray-400"
              key={index}
            >
              <div className="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full ">
                <div className="text-center tracking-wide">
                  <div className="text-white font-bold text-4xl ">
                    {getDate(event.date).day}
                  </div>
                  <div className="text-white font-normal text-2xl">
                    {getDate(event.date).month}
                  </div>
                </div>
              </div>
              <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
                <div className="flex flex-row lg:justify-start justify-center">
                  <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                    <i className="far fa-clock"></i> 7:30 PM
                  </div>
                  <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                    Organiser : {restaurantName}
                  </div>
                </div>
                <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                  {event.name}
                </div>

                <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                  {event.description}
                </div>
              </div>
              <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0 rounded-lg">
                <span className="tracking-wider text-gray-600 bg-gray-200 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                  Upcoming
                </span>
              </div>
            </div>
          ))}

          <div className="lg:flex shadow rounded-lg border  border-gray-400">
            <div className="bg-blue-600 rounded-lg lg:w-2/12 py-4 block h-full ">
              <div className="text-center tracking-wide">
                <div className="text-white font-bold text-4xl ">
                  {getDate("2023-12-01").day}
                </div>
                <div className="text-white font-normal text-2xl">
                  {getDate("2023-12-01").month}
                </div>
              </div>
            </div>
            <div className="w-full  lg:w-11/12 xl:w-full px-1 bg-white py-5 lg:px-2 lg:py-2 tracking-wide">
              <div className="flex flex-row lg:justify-start justify-center">
                <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  <i className="far fa-clock"></i> 7:30 PM
                </div>
                <div className="text-gray-700 font-medium text-sm text-center lg:text-left px-2">
                  Organiser : {restaurantName}
                </div>
              </div>
              <div className="font-semibold text-gray-800 text-xl text-center lg:text-left px-2">
                Concert Show of Yo Yo Honey Singh
              </div>

              <div className="text-gray-600 font-medium text-sm pt-1 text-center lg:text-left px-2">
                Experience the unstoppable energy in the electrifying Concert
                Show of Yo Yo Honey Singh .
              </div>
            </div>
            <div className="flex flex-row items-center w-full lg:w-1/3 bg-white lg:justify-end justify-center px-2 py-4 lg:px-0 rounded-lg">
              <span className="tracking-wider text-gray-600 bg-red-300 px-2 text-sm rounded leading-loose mx-2 font-semibold">
                Ended
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
