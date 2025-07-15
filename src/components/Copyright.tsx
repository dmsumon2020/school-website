// src/components/Footer.tsx
export default function Copyright() {
  return (
    <footer className="bg-gray-100 text-center py-6 mt-12 text-gray-600 text-sm">
      &copy; {new Date().getFullYear()} Islambag Ashraf Ali High School. All
      rights reserved.
    </footer>
  );
}
