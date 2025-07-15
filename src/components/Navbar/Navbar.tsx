import { DesktopMenu } from "./DesktopMenu"; // Desktop menu
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold">School Logo</div>

        {/* Desktop Nav */}
        <div className="hidden md:flex">
          <DesktopMenu />
        </div>

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    </header>
  );
}
