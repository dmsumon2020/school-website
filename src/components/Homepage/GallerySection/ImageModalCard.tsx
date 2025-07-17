"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

export default function ImageModalCard({
  img,
}: {
  img: { src: string; alt: string; title: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="relative group cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={300}
            height={200}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-xl">
            <span className="text-white text-4xl font-bold">+</span>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="max-w-5xl p-0 overflow-hidden">
        <DialogTitle>{img.title}</DialogTitle>
        <Image
          src={img.src}
          alt={img.title}
          width={1200}
          height={800}
          className="w-full h-auto"
        />
      </DialogContent>
    </Dialog>
  );
}
