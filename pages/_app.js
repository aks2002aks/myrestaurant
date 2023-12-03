import { Navbar } from "@/components/navbar/navbar";
import "@/styles/globals.css";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [restaurantName, setRestaurantName] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchRestaurantName = async () => {
      const response = await fetch("/api/getRestaurantName");
      const data = await response.json();
      setRestaurantName(data);
    };
    fetchRestaurantName();
  }, []);

  const homeRef = useRef(null);
  const eventRef = useRef(null);
  const awardsRef = useRef(null);
  const ambianceRef = useRef(null);
  const chefRef = useRef(null);
  const sustainabilityRef = useRef(null);
  const reviewRef = useRef(null);

  // Common function to handle click events
  const handleSectionClick = (sectionRef) => {
    if (router.pathname === "/") {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsMenuOpen(false);
    } else {
      router.push("/");
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        setIsMenuOpen(false);
      }, 1000);
    }
  };

  return (
    <>
      <Navbar
        restaurantName={restaurantName}
        handleHomeClick={() => handleSectionClick(homeRef)}
        handleEventClick={() => handleSectionClick(eventRef)}
        handleAwardsClick={() => handleSectionClick(awardsRef)}
        handleAmbianceClick={() => handleSectionClick(ambianceRef)}
        handleChefClick={() => handleSectionClick(chefRef)}
        handleSustainabilityClick={() => handleSectionClick(sustainabilityRef)}
        handleReviewClick={() => handleSectionClick(reviewRef)}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <Component
        {...pageProps}
        homeRef={homeRef}
        eventRef={eventRef}
        awardsRef={awardsRef}
        ambianceRef={ambianceRef}
        chefRef={chefRef}
        sustainabilityRef={sustainabilityRef}
        reviewRef={reviewRef}
      />
    </>
  );
}
