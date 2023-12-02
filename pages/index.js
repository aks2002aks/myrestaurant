import { Navbar } from "@/components/navbar/navbar";
import { Home } from "@/components/home/home";
import Image from "next/image";
import { useEffect, useState } from "react";
import Slider from "@/components/slider/slider";

export default function Main() {
  const [restaurantData, setRestaurantData] = useState(null);

  useEffect(() => {
    const fetchRestaurantData = async () => {
      const response = await fetch("/api/getWholeRestaurant");
      const data = await response.json();
      console.log(data);
      setRestaurantData(data);
    };
    fetchRestaurantData();
  }, []);

  return (
    <div>
      <Navbar restaurantName={restaurantData?.restaurant.name} />
      <Slider restaurantName={restaurantData?.restaurant.name} />
      {/* <Home />
        <Home /> */}
    </div>
  );
}
