import Facts from "@/components/Homepage/Facts/Facts";
import HeadmasterMessageSection from "@/components/Homepage/HeadmasterMessageSection";
import HeroSection from "@/components/Homepage/HeroSection";
import LatestNotice from "@/components/Homepage/LatestNotice";
import NewsTicker from "@/components/Homepage/NewsTicker";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker speed={"slow"} />
      <HeadmasterMessageSection />
      <Facts />
      <LatestNotice />
    </>
  );
}
