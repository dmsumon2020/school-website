// src/components/custom/NewsTicker.tsx
"use client";

import { NewsTickerProps, Speed } from "@/types/NewsTickerProps";
import React from "react";
import Marquee from "react-fast-marquee";

/**
 * NewsTicker Component
 * This component displays a list of news headlines in a continuously scrolling manner
 * using the react-fast-marquee library.
 *
 * @param {NewsTickerProps} props - The component props.
 * @param {string[]} props.newsItems - An array of news headlines to be displayed.
 * @param {'slow' | 'normal' | 'fast'} [props.speed='normal'] - The scrolling speed.
 */
const NewsTicker: React.FC<NewsTickerProps> = ({
  newsItems,
  speed = "normal",
}) => {
  // Determine marquee speed based on the speed prop
  const getMarqueeSpeed = (currentSpeed: Speed) => {
    switch (currentSpeed) {
      case "slow":
        return 80;
      case "fast":
        return 180;
      case "normal":
      default:
        return 120; // Default speed
    }
  };

  return (
    <div className="bg-blue-800 text-white py-2 w-full shadow-md">
      <Marquee
        speed={getMarqueeSpeed(speed)} // Pass the 'speed' prop to the function
        gradient={false} // Disable gradient effect
        pauseOnHover={true} // Pause scrolling on mouse hover
      >
        {newsItems.map((item, index) => (
          <span key={index} className="whitespace-nowrap mx-8 text-base">
            {" "}
            {/* Add margin and text size */}
            {item}
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export default NewsTicker;
