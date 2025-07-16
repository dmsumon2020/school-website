import Image from "next/image";
import React from "react";

/**
 * HeadmasterMessageSection Component
 * This component displays the headmaster's photo on the right and their message on the left.
 * It is designed to be responsive and visually appealing with a custom background color.
 */
const HeadmasterMessageSection: React.FC = () => {
  const headmasterImageUrl = "/images/headmaster.jpg";

  return (
    <section>
      {/* Added items-stretch to ensure flex items take equal height */}
      <div className="flex flex-col md:flex-row-reverse items-stretch justify-center">
        {/* Right Side: Headmaster's Image */}
        <div className="flex-1 w-full md:w-auto overflow-hidden relative h-72 md:h-auto">
          <Image
            src={headmasterImageUrl}
            alt="headmaster"
            fill
            className="object-cover"
          />
        </div>
        {/* Left Side: Headmaster's Message (now on the left for md screens and up) */}
        <div className="flex-1 p-8 md:px-28 md:py-40 text-white text-center md:text-left bg-theme-ascent">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            প্রধান শিক্ষকের বাণী
          </h2>
          <p className="text-xl md:text-lg leading-relaxed italic">
            &quot;শিক্ষা জাতির মেরুদণ্ড। একটি উন্নত ও সমৃদ্ধ জাতি গঠনে শিক্ষার
            কোনো বিকল্প নেই। আমাদের প্রতিষ্ঠান শিক্ষার্থীদের শুধুমাত্র পুঁথিগত
            বিদ্যায় শিক্ষিত করে না, বরং তাদের সুনাগরিক হিসেবে গড়ে তোলার জন্য
            নৈতিক ও মানবিক মূল্যবোধের শিক্ষাও প্রদান করে। আমরা বিশ্বাস করি,
            আজকের শিক্ষার্থীরাই আগামী দিনের ভবিষ্যৎ, আর তাদের সঠিক পথ নির্দেশনা
            দিতে আমরা বদ্ধপরিকর।&quot;
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
