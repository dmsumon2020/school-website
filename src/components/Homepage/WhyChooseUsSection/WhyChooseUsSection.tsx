import React from "react";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <h2 className="text-theme-ascent font-bold text-5xl mb-10">
          কেন আশরাফ আলী স্কুল <br /> আপনার সন্তানের জন্য সেরা নির্বাচন
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <WhyChooseUsCard
            title="গুণগতমানসম্পন্ন শিক্ষা"
            description="অভিজ্ঞ শিক্ষকদের মাধ্যমে শিশুর মেধা, চিন্তাশক্তি ও নৈতিকতা গঠনে কার্যকর পাঠদান।"
            sequence="01"
          />
          <WhyChooseUsCard
            title="আধুনিক সুযোগ-সুবিধা"
            description="ডিজিটাল ক্লাসরুম, বিজ্ঞানাগার, কম্পিউটার ল্যাব ও লাইব্রেরির সুবিধা।"
            sequence="02"
          />
          <WhyChooseUsCard
            title="সহশিক্ষা কার্যক্রম"
            description="বিতর্ক, সাংস্কৃতিক অনুষ্ঠান, খেলাধুলা ও নেতৃত্বমূলক কার্যক্রমে সম্পৃক্ততা।"
            sequence="03"
          />
        </div>
      </div>
    </section>
  );
}
