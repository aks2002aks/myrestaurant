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
    <div>
      <RestaurantMenu {...menu} />
    </div>
  );
};

export default Menu;
