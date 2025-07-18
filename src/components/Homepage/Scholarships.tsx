"use client";

import { motion } from "framer-motion";
import SchoolButton from "../SchoolButton";

export default function Scholarships() {
  const backgroundImageUrl = "/images/scholarship-bg.jpg";

  return (
    <section className="relative h-[400px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Animated Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          আর্থিক ভাবে অস্বচ্ছল ও মেধাবী শিক্ষার্থীদের জন্য বেতন আংশিক বা
          সম্পূর্ণ মওকুফের সুবিধা
        </h2>
        <p className="text-lg text-center max-w-3xl">
          আমাদের লক্ষ্য শুধু শিক্ষা প্রদান নয়, বরং মেধার যথাযথ বিকাশ নিশ্চিত
          করা। তাই আর্থিকভাবে অস্বচ্ছল কিন্তু মেধাবী শিক্ষার্থীদের জন্য রয়েছে
          বিশেষ বেতন মওকুফের সুযোগ।
        </p>
        <SchoolButton text="বিস্তারিত জানুন" link="#" />
      </motion.div>
    </section>
  );
}
