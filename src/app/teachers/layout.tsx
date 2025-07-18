import NewsTicker from "@/components/Homepage/NewsTicker";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Our Teachers | IAHS",
  description: "Meet our experienced and dedicated teaching staff.",
};

export default function TeachersLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <NewsTicker speed="slow" />

      <section className="container mx-auto py-8 px-4 md:px-8">
        {children}
      </section>
    </>
  );
}
