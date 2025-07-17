import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#181818] text-gray-300 py-32">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Column 1 - Contact Info */}
        <div className="text-[#737477]">
          <Image
            src="/images/logo.jpg"
            alt="School Logo"
            width={60}
            height={60}
            className="mb-5"
          />
          <p className="mb-5">
            We are passionate education dedicated to providing high-quality
            resources learners all backgrounds.
          </p>
          <p className="mb-5">
            <strong>Address:</strong> West Islambag, Posta, Dhaka - 1211,
            Bangladesh
          </p>
          <p className="mb-5">
            <strong>Email:</strong> iaahs108142@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> +880 1234 567890
          </p>
        </div>

        {/* Column 2 - Placeholder */}
        <div>
          <h3 className="text-xl font-semibold mb-8 underline">Useful Links</h3>
          <ul className="space-y-3 text-[#737477]">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Placeholder */}
        <div>
          <h3 className="text-xl font-semibold mb-8 underline">Useful Links</h3>
          <ul className="space-y-3 text-[#737477]">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Alumni
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tuition Fees
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Scholarships
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
