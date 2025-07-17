// src/components/custom/HeroSection.tsx

import React from "react";
import { Button } from "@/components/ui/button"; // ShadCN Button component import
import { getHeroSection } from "@/lib/strapi/getHeroSection";
import { HeroSectionType } from "@/types/HeroSectionType";
import SchoolButton from "../SchoolButton";

/**
 * HeroSection Component
 * * This component displays the main hero section for the school website.
 * It features a full-width background image with a text overlay and a call-to-action button.
 * It is designed to be responsive and visually appealing.
 */
const HeroSection = async () => {
  // calling API
  const data: HeroSectionType = await getHeroSection();

  const { title, subtitle1, subtitle2, buttonText, image } = data;
  const sliderImageUrl = image?.[0]?.url || "";

  return (
    <section className="relative h-[85vh] min-h-[400px] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${sliderImageUrl})`,
        }}
        aria-hidden="true"
      ></div>

      {/* Dark Overlay */}
      {/* This overlay improves text readability over the background image */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tight animate-fade-in-down">
          {title}
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fade-in-down my-8">
          {subtitle1}
        </h3>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          {subtitle2}
        </p>

        {/* Call-to-Action Button */}
        <div>
          <SchoolButton text="ভর্তি তথ্য পেতে ক্লিক করুন" link="#" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
