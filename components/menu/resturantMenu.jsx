import React from "react";

const MenuItem = ({ name, description, nutritionalInfo, price }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-2">{name}</h3>
    <p className="text-sm mb-2">{description}</p>
    <p className="text-xs text-gray-600 mb-2">
      Calories: {nutritionalInfo?.calories}, Protein: {nutritionalInfo?.protein}
      g, Carbs: {nutritionalInfo?.carbohydrates}g, Fat: {nutritionalInfo?.fat}g
    </p>
    <p className="text-lg font-bold">${price}</p>
  </div>
);

const MenuCategory = ({ name, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{name}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const SeasonalMenu = ({ name, items }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-bold mb-4">{name}</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items?.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const RestaurantMenu = ({ categories, seasonalMenu }) => (
  <div className="container mx-auto p-8">
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold pt-24">Restaurant Menu</h1>
    </header>

    {categories?.map((category, index) => (
      <MenuCategory key={index} {...category} />
    ))}

    <SeasonalMenu {...seasonalMenu} />
  </div>
);

export default RestaurantMenu;
