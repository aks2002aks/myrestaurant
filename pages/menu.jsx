import { MenuFull } from "@/components/menu/menuFull";
import RestaurantMenu from "@/components/menu/resturantMenu";
import React from "react";
import { useState, useEffect } from "react";


const Menu = () => {
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
    <div className="bg-yellow-50 ">
      <MenuFull/>
      {/* <div className="w-1/3">
        <RestaurantMenu menu={menu} />
      </div>
      <div className="w-2/3">
        <RestaurantMenu menu={menu} />
      </div> */}
    </div>
  );
};

export default Menu;
