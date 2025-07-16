// src/app/(main)/page.tsx
"use client";
import React from "react";
// import Link from 'next/link'; // Removed: For navigation links
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Assuming ShadCN Card is available
import HeadmasterMessageSection from "@/components/Homepage/HeadmasterMessageSection";
import NewsTicker from "@/components/Homepage/NewsTicker3";

// Define a simple type for News/Event items
interface NewsEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl?: string; // Optional image for the news card
}

// Dummy data for News & Events
const dummyNewsEvents: NewsEvent[] = [
  {
    id: "1",
    title: "বার্ষিক ক্রীড়া প্রতিযোগিতা ২০২৩ সফলভাবে সম্পন্ন",
    date: "১৫ জুলাই ২০২৩",
    description:
      "আমাদের স্কুলের বার্ষিক ক্রীড়া প্রতিযোগিতা অত্যন্ত উৎসাহ-উদ্দীপনার মধ্য দিয়ে শেষ হয়েছে।",
    imageUrl: "https://placehold.co/400x250/E0F2F7/000000?text=Sports+Day",
  },
  {
    id: "2",
    title: "বিজ্ঞান মেলা ২০২৪: উদ্ভাবনী প্রকল্প প্রদর্শন",
    date: "১০ জুন ২০২৪",
    description:
      "শিক্ষার্থীরা তাদের উদ্ভাবনী বৈজ্ঞানিক প্রকল্পগুলো উপস্থাপন করেছে।",
    imageUrl: "https://placehold.co/400x250/F0F9FF/000000?text=Science+Fair",
  },
  {
    id: "3",
    title: "নতুন শিক্ষাবর্ষের ক্লাস শুরু",
    date: "০১ জানুয়ারি ২০২৪",
    description:
      "নতুন শিক্ষাবর্ষের ক্লাস শুরু হয়েছে। সকল শিক্ষার্থীদের স্বাগতম!",
    imageUrl: "https://placehold.co/400x250/E6FFFA/000000?text=New+Session",
  },
];

// NewsCard Component (a simple card to display news/events)
// This would typically be in components/NewsCard.tsx
// Added "use client" directive to make NewsCard a Client Component
const NewsCard: React.FC<{ news: NewsEvent }> = ({ news }) => {
  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      {news.imageUrl && (
        <img
          src={news.imageUrl}
          alt={news.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null; // prevents infinite loop
            e.currentTarget.src =
              "https://placehold.co/400x250/CCCCCC/000000?text=Image+Not+Found"; // Fallback image
          }}
        />
      )}
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          {news.title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-500">
          {news.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700 leading-relaxed">
          {news.description}
        </p>
        {/* Changed Link to a tag for simplicity in this environment */}
        <a
          href={`/news-events/${news.id}`}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-2 p-0 h-auto text-blue-600 hover:underline"
        >
          বিস্তারিত দেখুন
        </a>
      </CardContent>
    </Card>
  );
};

// HeroSection Component (placeholder for a future Carousel)
// This would typically be in components/HeroSection.tsx
// Note: This component is assumed to be imported from src/components/custom/HeroSection.tsx
// For this example, we'll keep a local placeholder if the actual component is not yet integrated.
const HeroSection: React.FC = () => {
  // Assuming slider.webp is in public/images/slider/
  const sliderImageUrl = "/images/slider/slider.webp"; // Direct path for public assets

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${sliderImageUrl})`,
        }}
        aria-hidden="true"
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center px-4">
        <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-4 tracking-tight animate-fade-in-down">
          Islambag Ashraf Ali High School
        </h2>
        <h3 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight animate-fade-in-down">
          জ্ঞানই শক্তি, শিক্ষাই আলো
        </h3>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up">
          আমাদের প্রতিষ্ঠানে আপনার সন্তানকে একটি উজ্জ্বল ভবিষ্যতের জন্য প্রস্তুত
          করুন। আমরা মানসম্মত শিক্ষা প্রদানে প্রতিশ্রুতিবদ্ধ।
        </p>

        {/* Call-to-Action Button */}
        <a
          href="/admissions"
          className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          ভর্তি তথ্য দেখুন
        </a>
      </div>
    </section>
  );
};

// Main Home Page Component
export default function Home() {
  const latestNews = [
    "ভর্তি আবেদন চলছে! বিস্তারিত জানতে ভিজিট করুন।",
    "বার্ষিক ক্রীড়া প্রতিযোগিতা সফলভাবে সম্পন্ন হয়েছে।",
    "বিজ্ঞান মেলা ২০২৪: উদ্ভাবনী প্রকল্প প্রদর্শন।",
    "নতুন শিক্ষাবর্ষের ক্লাস শুরু হয়েছে।",
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      {/* Hero Section */}
      <HeroSection />
      {/* News Ticker Section */}
      <NewsTicker newsItems={latestNews} speed="normal" />{" "}
      {/* এখানে নিউজ টিকার ব্যবহার করা হয়েছে */}
      {/* Headmaster's Message Section */}
      <HeadmasterMessageSection />
      {/* About School Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg mx-4 md:mx-auto max-w-6xl -mt-16 relative z-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
            আমাদের স্কুল সম্পর্কে
          </h2>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
            আমাদের স্কুলটি শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদানের মাধ্যমে তাদের
            সুপ্ত প্রতিভা বিকাশে বদ্ধপরিকর। আমরা একটি নিরাপদ, সহায়ক এবং উদ্দীপক
            পরিবেশ নিশ্চিত করি, যেখানে প্রতিটি শিক্ষার্থী তাদের পূর্ণ সম্ভাবনা
            উপলব্ধি করতে পারে। অভিজ্ঞ শিক্ষক মণ্ডলী এবং আধুনিক শিক্ষাপদ্ধতি
            আমাদের সাফল্যের মূল চাবিকাঠি।
          </p>
          {/* Changed Link to a tag for simplicity in this environment */}
          <a
            href="/about"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-blue-700 bg-transparent px-6 py-3 text-blue-700 hover:bg-blue-50 hover:text-blue-800 transition-colors duration-300"
          >
            বিস্তারিত জানুন
          </a>
        </div>
      </section>
      {/* Latest News & Events Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700">
            সাম্প্রতিক খবর ও ইভেন্ট
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dummyNewsEvents.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
          <div className="text-center mt-12">
            {/* Changed Link to a tag for simplicity in this environment */}
            <a
              href="/news-events"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 text-lg font-bold shadow-md hover:shadow-lg transition-all duration-300"
            >
              সব খবর ও ইভেন্ট দেখুন
            </a>
          </div>
        </div>
      </section>
      {/* Important Announcements Section (Placeholder) */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-700">
            গুরুত্বপূর্ণ ঘোষণা
          </h2>
          <Card className="max-w-3xl mx-auto p-6 shadow-lg rounded-lg border-l-4 border-yellow-500 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-yellow-800">
                ভর্তি আবেদন শুরু হয়েছে!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-yellow-700">
                ২০২৫ শিক্ষাবর্ষের জন্য ভর্তি আবেদন প্রক্রিয়া শুরু হয়েছে।
                বিস্তারিত তথ্যের জন্য ভর্তি সেকশন ভিজিট করুন।
              </p>
              {/* Changed Link to a tag for simplicity in this environment */}
              <a
                href="/admissions"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 mt-4 p-0 h-auto text-yellow-800 hover:underline"
              >
                ভর্তি আবেদন করুন
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* Footer will be handled by the main layout.tsx */}
    </div>
  );
}
