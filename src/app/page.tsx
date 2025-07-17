import Facts from "@/components/Homepage/Facts/Facts";
import GallerySection from "@/components/Homepage/GallerySection/GallerySection";
import HeadmasterMessageSection from "@/components/Homepage/HeadmasterMessageSection";
import HeroSection from "@/components/Homepage/HeroSection";
import LatestNotice from "@/components/Homepage/LatestNotice";
import NewsTicker from "@/components/Homepage/NewsTicker";
import ParalaxSection from "@/components/Homepage/ParalaxSection";
import WhyChooseUsSection from "@/components/Homepage/WhyChooseUsSection/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker speed={"slow"} />
      <HeadmasterMessageSection />
      <Facts />
      <ParalaxSection />
      <LatestNotice />
      <WhyChooseUsSection />
      <GallerySection />
    </>
  );
}
