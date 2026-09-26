"use client";

import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaClock, FaFire, FaStar, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const PlanCard = ({ workout, removeItem, showDoneButton = false }) => {
  const handleRemove = () => {
    removeItem(workout.id);
    toast.info("Workout removed");
  };

  return (
    <article className="rounded-xl border border-[#242b38] bg-[#141820] p-3 sm:p-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-lg sm:h-20 sm:w-36">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(max-width: 640px) 100vw, 144px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="font-bold uppercase">{workout.name}</h2>
          <p className="text-sm text-gray-400">{workout.equipment}</p>

          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-300">
            <span className="flex items-center gap-1">
              <FaClock className="text-lime-400" /> {workout.duration} min
            </span>
            <span className="flex items-center gap-1">
              <FaFire className="text-lime-400" /> {workout.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <FaStar className="text-lime-400" /> {workout.rating}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <Link
            href={`/workout/${workout.id}`}
            className="rounded-full border border-[#394252] px-4 py-2 text-xs hover:border-lime-400"
          >
            View Details
          </Link>

          {showDoneButton && (
            <button
              type="button"
              onClick={() => toast.success("Workout marked as done!")}
              className="flex items-center gap-2 rounded-full bg-lime-400 px-4 py-2 text-xs font-semibold text-black hover:bg-lime-300"
            >
              <FaCheck /> Mark as Done
            </button>
          )}

          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${workout.name}`}
            className="rounded-full p-2 text-gray-400 hover:bg-[#252b36] hover:text-white"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlanCard;