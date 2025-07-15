// src/components/custom/HeadmasterMessageSection.tsx

import Image from "next/image";
import React from "react";

/**
 * HeadmasterMessageSection Component
 * This component displays the headmaster's photo on the right and their message on the left.
 * It is designed to be responsive and visually appealing with a custom background color.
 */
const HeadmasterMessageSection: React.FC = () => {
  // Direct path to the image in the public folder
  const headmasterImageUrl = "/images/headmaster.jpg";

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
      {/* Added items-stretch to ensure flex items take equal height */}
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-stretch justify-center gap-8 md:gap-12 max-w-6xl">
        {/* Right Side: Headmaster's Image */}
        {/* Added relative position and h-full to ensure Image can fill this div */}
        <div className="flex-1 w-full md:w-auto overflow-hidden relative h-72 md:h-auto">
          <Image
            src={headmasterImageUrl}
            alt="headmaster"
            // Use fill prop to make the image take up the full height and width of its parent
            fill
            className="object-cover" // object-cover ensures the image covers the area without distortion
            // width and height props are not needed when fill is true
          />
        </div>
        {/* Left Side: Headmaster's Message (now on the left for md screens and up) */}
        <div
          className="flex-1 p-8 rounded-lg shadow-xl text-white text-center md:text-left"
          style={{ backgroundColor: "#140f50" }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            প্রধান শিক্ষকের বাণী
          </h2>
          <p className="text-xl leading-relaxed italic">
            "শিক্ষা জাতির মেরুদণ্ড। একটি উন্নত ও সমৃদ্ধ জাতি গঠনে শিক্ষার কোনো
            বিকল্প নেই। আমাদের প্রতিষ্ঠান শিক্ষার্থীদের শুধুমাত্র পুঁথিগত
            বিদ্যায় শিক্ষিত করে না, বরং তাদের সুনাগরিক হিসেবে গড়ে তোলার জন্য
            নৈতিক ও মানবিক মূল্যবোধের শিক্ষাও প্রদান করে। আমরা বিশ্বাস করি,
            আজকের শিক্ষার্থীরাই আগামী দিনের ভবিষ্যৎ, আর তাদের সঠিক পথ নির্দেশনা
            দিতে আমরা বদ্ধপরিকর।"
          </p>
          <p className="text-xl font-semibold mt-6">
            - প্রধান শিক্ষক, ইসলামবাগ আশরাফ আলী হাই স্কুল
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeadmasterMessageSection;
