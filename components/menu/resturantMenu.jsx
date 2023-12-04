import React from "react";
import { FoodItem } from "./foodItem";

// const MenuCategory = ({ name, items }) => (
//   <div className="flex flex-wrap">
//     {items?.map((item, index) => (
//       <FoodItem key={index} {...item} />
//     ))}
//   </div>
// );

const RestaurantMenu = ({ menu }) => (
  <div className="flex flex-wrap">
    {menu?.map((item, index) => (
      <FoodItem key={index} {...item} />
    ))}
  </div>
);

export default RestaurantMenu;
