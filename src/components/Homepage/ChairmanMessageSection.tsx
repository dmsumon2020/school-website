import { getHeadmasterMessage } from "@/lib/strapi/getHeadmasterMessage";
import { HeadmasterMessageType } from "@/types/HeadmasterMessageType";

import Image from "next/image";

export default async function ChairmanMessageSection() {
  const data = await getHeadmasterMessage();
  const item: HeadmasterMessageType = data[0];

  const { title, message, headmasterName, image } = item;

  const imageUrl = image?.[0]?.url || "";

  const plainMessage =
    message
      ?.map((block) => block.children?.map((child) => child.text).join(" "))
      .join("\n\n") || "";

  return (
    <section>
      <div className="flex flex-col md:flex-row items-stretch justify-center">
        <div className="flex-1 w-full md:w-auto overflow-hidden relative h-72 md:h-auto">
          {imageUrl && (
            <Image
              src="/images/headmaster.jpg"
              alt="headmaster"
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex-1 p-8 md:px-28 md:py-40 text-white text-center md:text-left bg-theme-ascent">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            A message from our honorable chairman
          </h2>

          <p className="text-xl md:text-lg leading-relaxed italic whitespace-pre-line">
            As the honorable president of Ashraf Ali High School, I am proud of
            our dedication and pursuit of excellence. This institution nurtures
            bright minds, shapes future leaders, and fosters innovation. Beyond
            academics, our students excel in extracurricular activities,
            embodying the true spirit of Begum Badrunnessa Govt. Girls College.
            I encourage every student to embrace challenges, strive for
            knowledge, and uphold the values that define our esteemed
            institution
          </p>

          <p className="text-xl font-semibold mt-6">- Sumaiya Ashraf</p>
        </div>
      </div>
    </section>
  );
}
