import { Button } from "@/components/ui/button";
import ImageModalCard from "./ImageModalCard";

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
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-theme-ascent mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Embark on a journey of knowledge, discovery, and growth at Unipix
            University. Our admissions process is designed to identify bright,
            motivated individuals who are eager to contribute to our dynamic
            academic community.
          </p>
          <Button className="text-lg">Know more</Button>
        </div>

        {/* Right - 2 staggered image columns */}
        <div className="grid grid-cols-2 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            {column1.map((img, idx) => (
              <ImageModalCard key={idx} img={img} />
            ))}
          </div>

          {/* Column 2 with vertical offset */}
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
