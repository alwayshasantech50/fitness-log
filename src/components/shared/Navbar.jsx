"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { usePlan } from "@/context/PlanContext";

const Navbar = () => {
  const pathname = usePathname();
  const { todayPlan, savedWorkouts } = usePlan();

  const workoutActive =
    pathname === "/" || pathname.startsWith("/workout/");
  const planActive = pathname === "/my-plan";

  return (
    <header className="border-b border-[#1b2130]">
      <nav className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="FitLog logo"
              width={32}
              height={32}
              priority
            />
            <span className="text-xl font-bold tracking-wider sm:text-2xl">
              FITLOG
            </span>
          </Link>

          
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm transition ${
                workoutActive
                  ? "bg-lime-400 font-medium text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className={`rounded-full px-4 py-2 text-sm transition ${
                planActive
                  ? "bg-lime-400 font-medium text-black"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              My Plan
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm"
              aria-label={`My Plan: ${todayPlan.length} workouts`}
            >
              <span className="text-gray-400">Plan</span>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-lime-400 px-1 text-xs font-bold text-black">
                {todayPlan.length}
              </span>
            </Link>

            <Link
              href="/my-plan"
              className="flex items-center gap-1.5 text-xs sm:gap-2 sm:text-sm"
              aria-label={`Saved: ${savedWorkouts.length} workouts`}
            >
              <span className="text-gray-400">Saved</span>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-gray-700 px-1 text-xs">
                {savedWorkouts.length}
              </span>
            </Link>
          </div>
        </div>

        
        <div className="flex justify-center gap-2 pb-3 md:hidden">
          <Link
            href="/"
            className={`rounded-full px-5 py-2 text-sm transition ${
              workoutActive
                ? "bg-lime-400 font-medium text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`rounded-full px-5 py-2 text-sm transition ${
              planActive
                ? "bg-lime-400 font-medium text-black"
                : "text-gray-400 hover:text-white"
            }`}
          >
            My Plan
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;