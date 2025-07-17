// src/components/Footer.tsx
export default function Copyright() {
  return (
    <div className="bg-[#181818] text-center py-6  text-[#737477] text-sm border-t border-[#242424]">
      &copy; {new Date().getFullYear()} Islambag Ashraf Ali High School. All
      rights reserved.|<span>Developed with love by Din Muhammad Sumon</span>
    </div>
  );
}
