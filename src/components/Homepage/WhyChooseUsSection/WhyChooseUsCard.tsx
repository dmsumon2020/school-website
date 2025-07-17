import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  description: string;
  sequence: string;
};

export default function WhyChooseUsCard({
  title,
  description,
  sequence,
}: Props) {
  const icon1 = "/images/icon1.svg";
  const icon2 = "/images/icon2.png";

  return (
    <div className="transition-all duration-400 ease-in-out bg-theme-ascent hover:bg-transparent px-10 py-12 text-white relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-full h-full transition-all duration-400 ease-in-out opacity-0 group-hover:opacity-100 before:content-[''] before:absolute before:inset-0 before:w-full before:h-full before:bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,#000_100%)] before:transition-all before:duration-400">
        <Image
          src={icon2}
          alt=""
          width={480}
          height={271}
          className="shrink-0"
        />
      </div>

      <div className="flex items-center justify-between relative z-10">
        <Image src={icon1} alt="" width={50} height={50} className="shrink-0" />
        <span className="text-6xl font-bold tracking-tighter text-clip">
          {sequence}
        </span>
      </div>

      <h3 className="text-3xl font-semibold mt-6 mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-xl mt-8 relative z-10">{description}</p>
    </div>
  );
}
