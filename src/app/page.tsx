import Facts from "@/components/Homepage/Facts/Facts";
import HeadmasterMessageSection from "@/components/Homepage/HeadmasterMessageSection";
import HeroSection from "@/components/Homepage/HeroSection";
import NewsTicker from "@/components/Homepage/NewsTicker";

const latestNews = [
  "ভর্তি আবেদন চলছে! বিস্তারিত জানতে ভিজিট করুন।",
  "বার্ষিক ক্রীড়া প্রতিযোগিতা সফলভাবে সম্পন্ন হয়েছে।",
  "বিজ্ঞান মেলা ২০২৪: উদ্ভাবনী প্রকল্প প্রদর্শন।",
  "নতুন শিক্ষাবর্ষের ক্লাস শুরু হয়েছে।",
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <NewsTicker newsItems={latestNews} speed="normal" />
      <HeadmasterMessageSection />
      <Facts />
    </>
  );
}
