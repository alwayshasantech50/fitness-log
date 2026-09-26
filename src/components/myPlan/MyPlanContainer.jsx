"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import StatsSummary from "./StatsSummary";
import PlanTabs from "./PlanTabs";
import SortDropdown from "./SortDropdown";
import PlanCard from "./PlanCard";

const MyPlanContainer = () => {
  const [activeTab, setActiveTab] = useState("plan");
  const [sortBy, setSortBy] = useState("duration");

  const {
    todayPlan,
    savedWorkouts,
    removeFromPlan,
    removeFromSaved,
    isLoaded,
  } = usePlan();

  const totalMinutes = todayPlan.reduce(
    (sum, workout) => sum + Number(workout.duration),
    0
  );
  const totalCalories = todayPlan.reduce(
    (sum, workout) => sum + Number(workout.caloriesBurned),
    0
  );

  const currentData = activeTab === "plan" ? todayPlan : savedWorkouts;

  const sortedData = useMemo(
    () =>
      [...currentData].sort(
        (a, b) => Number(b[sortBy]) - Number(a[sortBy])
      ),
    [currentData, sortBy]
  );

  return (
    <div>
      <h1 className="mb-1 text-4xl font-bold uppercase sm:text-5xl">
        MY PLAN
      </h1>
      <p className="mb-6 text-gray-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <StatsSummary
        exercises={todayPlan.length}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
        <PlanTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>

      {!isLoaded ? (
        <div className="py-20 text-center text-gray-400">
          Loading workouts…
        </div>
      ) : sortedData.length === 0 ? (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-xl border border-dashed border-[#242b38] px-4 py-12 text-center">
          <h2 className="text-xl font-bold uppercase">NOTHING HERE YET</h2>
          <p className="mt-1 text-sm text-gray-400">
            Browse the library and add a lift to get today moving.
          </p>
          <Link
            href="/"
            className="mt-5 rounded-full bg-lime-400 px-5 py-2 text-sm font-semibold text-black hover:bg-lime-300"
          >
            Go to workouts
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedData.map((workout) => (
            <PlanCard
              key={workout.id}
              workout={workout}
              showDoneButton={activeTab === "plan"}
              removeItem={
                activeTab === "plan" ? removeFromPlan : removeFromSaved
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPlanContainer;