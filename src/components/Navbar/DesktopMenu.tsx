import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export function DesktopMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-4 text-sm font-medium">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>About</NavigationMenuTrigger>
          <NavigationMenuContent className="p-4 bg-white rounded-md shadow-md animate-scale-in">
            <ul className="grid gap-2 w-48">
              <li>
                <Link
                  href="/about/history"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/about/mission"
                  className="block px-2 py-1 hover:bg-gray-100 rounded"
                >
                  Mission & Vision
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/admission" className="hover:text-primary">
              Admission
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/events" className="hover:text-primary">
              Events
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
