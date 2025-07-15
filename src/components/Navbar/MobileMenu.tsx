"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader, // Import SheetHeader
  SheetTitle, // Import SheetTitle
  SheetDescription, // Import SheetDescription
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-64 p-4">
          {/* Add SheetHeader with SheetTitle and SheetDescription */}
          <SheetHeader>
            <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>{" "}
            {/* Hidden title for accessibility */}
            <SheetDescription className="sr-only">
              Navigation menu for mobile devices.
            </SheetDescription>
          </SheetHeader>

          <nav className="space-y-2 mt-6 text-sm font-medium">
            {/* Home */}
            <Link href="/" onClick={() => setOpen(false)} className="block">
              Home
            </Link>

            {/* ✅ About Dropdown with ShadCN Accordion */}
            <Accordion type="single" collapsible>
              <AccordionItem value="about">
                <AccordionTrigger className="px-0 hover:no-underline py-1">
                  About
                </AccordionTrigger>
                <AccordionContent className="pl-4 space-y-1">
                  <Link
                    href="/about/history"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    History
                  </Link>
                  <Link
                    href="/about/mission"
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    Mission & Vision
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Other static links */}
            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="block"
            >
              Admission
            </Link>
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="block"
            >
              Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
