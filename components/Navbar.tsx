import Link from "next/link";


export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between">
      <Link href="/" className="font-bold text-lg">
        HousingFinder
      </Link>

      <div className="space-x-4">
        <Link href="/" className="text-gray-600 hover:text-black">
          Home
        </Link>
        <Link href="/favorites" className="text-gray-600 hover:text-black">
          Favorites
        </Link>
      </div>
    </nav>
  );
}
