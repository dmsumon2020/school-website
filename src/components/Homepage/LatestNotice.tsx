import { Button } from "../ui/button";

export default function LatestNotice() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <h2 className="text-theme-ascent font-bold text-5xl text-center mb-10">
          Latest Notice and Updates
        </h2>
        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="min-w-12  flex flex-col items-center justify-center px-5">
              <span className="text-xl">20</span>
              <span>Dec</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                প্রধানমন্ত্রীর শিক্ষা সহায়তা ট্রাস্টের আওতায় ২০২৫-২৬ অর্থবছরের
                চিকিৎসা অনুদান এর জুলাই-আগস্ট ২০২৫ প্রান্তের অনলাইনে আবেদন
                সংক্রান্ত বিজ্ঞপ্তি
              </p>
            </div>
          </div>
        </a>
        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="flex flex-col items-center justify-center px-5">
              <span className="text-xl">17</span>
              <span>Nov</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                ০১/০৭/২০২৫ ও ০৩/০৭/২০২৫ তারিখের উচ্চমাধ্যমিক পরীক্ষার আসন
                বিন্যাস কেন্দ্র: ইসলামবাগ আশরাফ আলী উচ্চ বিদ্যালয়,ঢাকা।
              </p>
            </div>
          </div>
        </a>

        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="flex flex-col items-center justify-center px-5">
              <span className="text-xl">30</span>
              <span>Oct</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                জুলাই গণঅভ্যুন্থান বর্ষপূর্তি উপলক্ষে গ্রাফিতি ও চিত্রাঙ্কন
                প্রতিযোগিতা আয়োজন সংক্রান্ত।
              </p>
            </div>
          </div>
        </a>

        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="flex flex-col items-center justify-center px-5 ">
              <span className="text-xl">19</span>
              <span>Sep</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                09-04-2025 প্রফেসর ড. মোঃ আলী আশরাফ, অধ্যাপক, পদার্থবিজ্ঞান-এর
                এর অনাপত্তি সনদ (NOC)
              </p>
            </div>
          </div>
        </a>

        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="flex flex-col items-center justify-center px-5">
              <span className="text-xl">14</span>
              <span>Aug</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                17-04-2025 একাদশ শ্রেণির শ্রেণি পরীক্ষা-০২ এ অংশগ্রহণে যোগ্য
                শিক্ষার্থীদের তালিকা বিজ্ঞান শাখা
              </p>
            </div>
          </div>
        </a>

        <a href="/notice-details">
          <div className="flex items-center gap-8 py-3 border-b">
            <div className="min-w-12 flex flex-col items-center justify-center px-5">
              <span className="text-xl">25</span>
              <span>Jul</span>
            </div>
            <div className="notice-content">
              <p className="text-xl">
                উচ্চমাধ্যমিক পরীক্ষা-২০২৫ এর শিক্ষার্থীদের দোয়া অনুষ্ঠান
                সংক্রান্ত নোটিশ
              </p>
            </div>
          </div>
        </a>

        {/* View All Notices Button (ShadCN style) */}
        <div className="text-center mt-10">
          <Button
            asChild
            size={"lg"}
            className="px-6 py-7 font-bold text-xl hover:scale-105 hover:bg-theme-ascent transition-all duration-100 ease-in-out"
          >
            <a href="/notices">সকল নোটিশ দেখুন</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
