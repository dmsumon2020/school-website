import Image from "next/image";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title:
      "ইসলামবাগ  আশরাফ আলী উচ্চ বিদ্যালয়ের সভাপতির নেতৃত্বে স্কুলের শিক্ষার মান উন্নয়ন বিষয়ে একটি দীর্ঘ মিটিং অনুষ্ঠিত হয়",
    author: "Admin",
    date: "November 28, 2023",
    image: "/images/events1.jpg",
  },
  {
    title:
      "জাতীয় বৃক্ষ রোপণ ও আসন্ন বার্ষিক পরীক্ষা নিয়ে প্রধান শিক্ষক জনাব  মোঃ আলমগির হোসেন  নেতৃত্বে  একটি আলোচনা সভা অনুষ্ঠিত হয় ",
    author: "Admin",
    date: "November 28, 2023",
    image: "/images/events2.jpg",
  },
  {
    title:
      "আসন্ন বার্ষিক ক্রীড়া অনুষ্ঠান উপলক্ষে ক্রীড়া শিক্ষক মোঃ আনোয়ার হোসেন কর্তৃক অনুষ্ঠানসূচি প্রকাশিত হয়েছে।",
    author: "Admin",
    date: "November 28, 2023",
    image: "/images/events3.jpg",
  },
];

export default function SchoolEvents() {
  return (
    <div className="space-y-6">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="flex gap-4 border border-gray-200 rounded-md p-4"
        >
          <div className="w-1/3">
            <Image
              src={post.image}
              alt={post.title}
              width={300}
              height={200}
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="w-2/3 flex flex-col justify-center">
            <div className="flex items-center text-sm text-gray-500 mb-2 space-x-4">
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
            <h2 className="text-lg font-semibold leading-snug">{post.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
