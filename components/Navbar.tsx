import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center space-x-3">
          <HomeIcon className="w-10  h-10 text-gray-800" />  
          <span className="text-lg font-semibold text-slate-900">
            OS Housing Finder
          </span>
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/" className="text-slate-700 hover:text-slate-900">
            Listings
          </Link>
          <Link href="/favorites" className="text-slate-700 hover:text-slate-900">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
}
