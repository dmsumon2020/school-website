import Link from "next/link";

export default function NavbarTop() {
  return (
    <>
      <div className="bg-theme-ascent">
        <div className="container mx-auto px-4 py-2 flex justify-center items-center text-white">
          <div className="grow">
            EIIN: 108142 | West Islambag, Posta, Dhaka - 1211 | +880-1738-847798
          </div>
          <div className="shrink text-white">
            <Link href={""}>Login</Link>
          </div>
        </div>
      </div>
    </>
  );
}
