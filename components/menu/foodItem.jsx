import Image from "next/image";
import React from "react";

export const FoodItem = ({
  name,
  description,
  nutritional_info,
  price,
  seasonal_availability,
  ingredients,
}) => {
  return (
    <div className="bg-yellow-900 border text-white border-gray-200 rounded-lg shadow   max-w-sm m-1">
      <div className="flex flex-col">
        <Image
          className="rounded-t-lg w-[384px]"
          src={`https://source.unsplash.com/random/384x200?${name}`}
          alt=""
          height={200}
          width={384}
        />
      </div>

      <div className="p-5 flex flex-col">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-200">{description}</p>
        <p className="mb-3 font-normal text-gray-200 text-center">
          Ingredients
        </p>
        <div className="flex justify-start pb-4  overflow-x-auto">
          {ingredients?.map((ingredient, index) => (
            <div className="flex flex-col items-center m-2" key={index}>
              <Image
                className="rounded-full"
                src={`https://source.unsplash.com/random/50x50?${ingredient}`}
                alt=""
                height={50}
                width={50}
              />
              <span className="text-xs w-12 text-center text-nowrap pt-2">
                {ingredient}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-red-400 my-2">
          <span>Calories : </span>
          <span className="text-white">{nutritional_info?.calories} ,</span>
          <span> Protein : </span>
          <span className="text-white"> {nutritional_info?.protein}g ,</span>
          <span> Carbs : </span>
          <span className="text-white">
            {nutritional_info?.carbohydrates}g ,
          </span>
          <span> Fat : </span>
          <span className="text-white">{nutritional_info?.fat}g </span>
        </p>
        <p className="text-sm font-semibold">
          <span>Seasons Available : </span>
          {seasonal_availability?.map((season, index) => (
            <span key={index}>{season} </span>
          ))}
        </p>
        <p className="text-lg font-bold">${price}</p>
      </div>
    </div>
  );
};
