import Image from "next/image";
import { DesktopMenu } from "./DesktopMenu"; // Desktop menu
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-6">
        <div className="text-xl font-bold flex flex-row items-center gap-4 text-theme-ascent">
          <Image
            src="/images/logo.jpg"
            alt="School Logo"
            width={80}
            height={80}
          />
          IAAHS
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
