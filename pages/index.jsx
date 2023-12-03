import { Navbar } from "@/components/navbar/navbar";
import { Location } from "@/components/location/location";
import { useEffect, useState } from "react";
import Slider from "@/components/slider/slider";
import { Chef } from "@/components/chef/chef";
import { Ambiance } from "@/components/ambiance/ambiance";
import { Event } from "@/components/events/event";
import Review from "@/components/reviews/review";
import { Awards } from "@/components/awards/awards";
import { Sustainability } from "@/components/sustainability/sustainability";
import { Footer } from "@/components/footer/footer";
import { ShortMenu } from "@/components/menu/shortMenu";

export default function Main({
  homeRef,
  eventRef,
  awardsRef,
  ambianceRef,
  chefRef,
  sustainabilityRef,
  reviewRef,
}) {
  const [restaurantName, setRestaurantName] = useState(null);

  useEffect(() => {
    const fetchRestaurantName = async () => {
      const response = await fetch("/api/getRestaurantName");
      const data = await response.json();
      setRestaurantName(data);
    };
    fetchRestaurantName();
  }, []);

  return (
    <div>
      <Slider restaurantName={restaurantName} homeRef={homeRef} />
      <Event restaurantName={restaurantName} eventRef={eventRef} />
      <Location />
      <ShortMenu />
      <Awards awardsRef={awardsRef} />
      <Ambiance ambianceRef={ambianceRef} />
      <Chef chefRef={chefRef} />
      <Sustainability sustainabilityRef={sustainabilityRef} />
      <Review reviewRef={reviewRef} />
      <Footer restaurantName={restaurantName} />
    </div>
  );
}
