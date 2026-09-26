"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#1b2130]">
      <nav className="max-w-7xl mx-auto h-20 px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">

         {/* logo */}
          <Image
            src="/images/logo.png"
            alt="FitLog Logo"
            width={32}
            height={32}
            priority
          />

          <span className="text-2xl font-bold tracking-wider">FITLOG</span>
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm transition ${
              pathname === "/"
                ? "bg-lime-400 text-black font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`px-4 py-2 rounded-full text-sm transition ${
              pathname === "/my-plan"
                ? "bg-lime-400 text-black font-medium"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>

        {/* Counters */}
        <div className="flex items-center gap-5">
          <Link href="/my-plan" className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Plan</span>

            <span className="bg-lime-400 text-black rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
              0
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Saved</span>

            <span className="border border-gray-700 rounded-full w-6 h-6 flex items-center justify-center text-xs">
              0
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
