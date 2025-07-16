import { getHeadmasterMessage } from "@/lib/getHeadmasterMessage";
import { HeadmasterMessage } from "@/types/HeadmasterMessage";
import Image from "next/image";

export default async function HeadmasterMessageSection() {
  const data = await getHeadmasterMessage();
  const item: HeadmasterMessage = data[0];

  const { title, message, headmasterName, image } = item;

  const imageUrl = image?.[0]?.url || "";

  const plainMessage =
    message
      ?.map((block) => block.children?.map((child) => child.text).join(" "))
      .join("\n\n") || "";

  return (
    <section>
      <div className="flex flex-col md:flex-row-reverse items-stretch justify-center">
        <div className="flex-1 w-full md:w-auto overflow-hidden relative h-72 md:h-auto">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt="headmaster"
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex-1 p-8 md:px-28 md:py-40 text-white text-center md:text-left bg-theme-ascent">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>

          <p className="text-xl md:text-lg leading-relaxed italic whitespace-pre-line">
            {plainMessage}
          </p>

          <p className="text-xl font-semibold mt-6">{headmasterName}</p>
        </div>
      </div>
    </section>
  );
}
