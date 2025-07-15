// src/components/custom/HeroSection.tsx

import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component import

/**
 * HeroSection Component
 * * This component displays the main hero section for the school website.
 * It features a full-width background image with a text overlay and a call-to-action button.
 * It is designed to be responsive and visually appealing.
 */
const HeroSection = () => {
  const slider = "/images/slider/slider.jpg";

  return (
    <section className="relative h-[90vh] min-h-[400px] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${slider})`,
        }}
        aria-hidden="true"
      ></div>

      {/* Dark Overlay */}
      {/* This overlay improves text readability over the background image */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tight animate-fade-in-down">
          Islambag Ashraf Ali High School
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fade-in-down">
          জ্ঞানই শক্তি, শিক্ষাই আলো
        </h3>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          আমাদের প্রতিষ্ঠানে আপনার সন্তানকে একটি উজ্জ্বল ভবিষ্যতের জন্য প্রস্তুত
          করুন। আমরা মানসম্মত শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ।
        </p>

        {/* Call-to-Action Button */}
        <Button
          size="lg"
          className="hover:bg-theme-ascent bg-white text-black hover:text-white cursor-pointer font-bold py-7 px-6 rounded-full transition-transform transform hover:scale-105 text-xl"
        >
          ভর্তি তথ্য দেখুন
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
