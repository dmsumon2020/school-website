import Image from "next/image";
import ImageModalCard from "./ImageModalCard";
import SchoolButton from "@/components/SchoolButton";

const column1 = [
  {
    src: "/images/program__1.jpeg",
    alt: "Science Program",
    title: "Explore the Science Program",
  },
  {
    src: "/images/program__2.jpeg",
    alt: "Arts Program",
    title: "Discover the Arts Program",
  },
];

const column2 = [
  {
    src: "/images/program__3.jpeg",
    alt: "Engineering Program",
    title: "Dive into Engineering",
  },
  {
    src: "/images/program__4.jpeg",
    alt: "Business Program",
    title: "Unlock Business Knowledge",
  },
];

export default function GallerySection() {
  const arrowImage = "/images/arrow.svg";

  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-theme-ascent font-bold text-5xl mb-10">
            সকল শ্রেণিতে ভর্তির জন্য যা যা প্রয়োজন
          </h2>
          <ol className="text-2xl text-gray-700 space-y-3 mb-6 list-decimal list-inside">
            <li>শিক্ষার্থীর ২ কপি পাসপোর্ট সাইজ ছবি</li>
            <li>জন্ম নিবন্ধ</li>
            <li>পিতার NID কার্ডের ফটোকপি</li>
            <li>মাতার NID কার্ডের ফটোকপি</li>
            <li>পূর্ববর্তী শিক্ষাপ্রতিষ্ঠানের ছাড়পত্র/ TC (যদি থাকে)</li>
            <li>৯ম শ্রেণিতে ভর্তির ক্ষেত্রে PSC সার্টিফিকেট প্রয়োজন </li>
            <li>পূরণকৃত ভর্তি ফরম</li>
          </ol>

          <h2 className="text-theme-ascent font-bold text-3xl">
            আরও বিস্তারিত জানতে ফোন দিন
          </h2>
          <div className="ml-[150px]">
            <Image
              src={arrowImage}
              alt="Arrow"
              width={136}
              height={199}
              className=""
            />

            <div className="rotate-[-50deg] ml-[60px] -mt-[10%] inline-block">
              <SchoolButton text="01738-847798" link="#" />
            </div>
          </div>
        </div>

        {/* Right - 2 staggered image columns */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            {column1.map((img, idx) => (
              <ImageModalCard key={idx} img={img} />
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-16">
            {column2.map((img, idx) => (
              <ImageModalCard key={idx} img={img} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
