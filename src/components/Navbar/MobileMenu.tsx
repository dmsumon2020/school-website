"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
          <nav className="space-y-2 mt-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="block font-medium"
            >
              Home
            </Link>

            {/* Dropdown (Manual inside Sheet) */}
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                About
              </summary>
              <div className="pl-4 mt-2 space-y-1 text-sm">
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
              </div>
            </details>

            <Link
              href="/admission"
              onClick={() => setOpen(false)}
              className="block font-medium"
            >
              Admission
            </Link>
            <Link
              href="/events"
              onClick={() => setOpen(false)}
              className="block font-medium"
            >
              Events
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block font-medium"
            >
              Contact
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
