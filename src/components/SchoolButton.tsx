import Link from "next/link";
import { Button } from "./ui/button";
import { SchoolButtonType } from "@/types/SchoolButtonType";

export default function SchoolButton({ text, link }: SchoolButtonType) {
  return (
    <Button
      asChild
      size="lg"
      className="mt-10 text-[16px] py-7 px-[30px] font-bold rounded-none cursor-pointer bg-theme-ascent"
    >
      <Link href={link}>
        {text} <span className="ml-2">→</span>
      </Link>
    </Button>
  );
}
