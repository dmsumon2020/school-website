import { getNewsTicker } from "@/lib/strapi/getNewsTicker";
import { NewsTickerType, Speed } from "@/types/NewsTickerType";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default async function NewsTicker({ speed }: { speed: Speed }) {
  const data: NewsTickerType[] = await getNewsTicker();

  console.log(data);

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
        {data.map((item, index) =>
          item.url ? (
            <Link
              href={item.url}
              key={index}
              className="whitespace-nowrap mx-8 text-2xl"
            >
              {item.news}
            </Link>
          ) : (
            <span key={index} className="whitespace-nowrap mx-8 text-2xl">
              {item.news}
            </span>
          )
        )}
      </Marquee>
    </div>
  );
}
