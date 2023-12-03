import React from "react";
import { useState, useEffect } from "react";
import RestaurantMenu from "./resturantMenu";

export const Menu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    const fetchRestaurantMenu = async () => {
      const response = await fetch("/api/getRestaurantMenu");
      const data = await response.json();
      console.log(data);
      setMenu(data);
    };
    fetchRestaurantMenu();
  }, []);
  return (
    // <div className="">
    //   <div className="">
    //     {menu.categories(

    //     )}
    //   </div>
    //   <div className=""></div>
    // </div>
    <div className="">
      <RestaurantMenu {...menu} />
    </div>
  );
};
