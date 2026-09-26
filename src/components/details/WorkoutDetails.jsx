"use client";

import { FaBookmark, FaPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { usePlan } from "@/context/PlanContext";

const WorkoutDetails = ({ workout }) => {
  const { addToPlan, addToSaved } = usePlan();

  const handlePlan = () => {
    const result = addToPlan(workout);

    if (result === true) {
      toast.success("Added to today's plan");
    } else if (result === "limit") {
      toast.error("Maximum 5 workouts allowed");
    } else {
      toast.warning("Already in today's plan");
    }
  };

  const handleSaved = () => {
    const result = addToSaved(workout);

    if (result === true) {
      toast.success("Saved for later");
    } else {
      toast.warning("Already saved");
    }
  };

  return (
    <div className="flex flex-wrap gap-4">
      <button
        onClick={handlePlan}
        className="btn bg-lime-400 hover:bg-lime-300 text-black border-none rounded-full"
      >
        <FaPlus />
        Add To Today's Plan
      </button>

      <button
        onClick={handleSaved}
        className="btn btn-outline rounded-full"
      >
        <FaBookmark />
        Save For Later
      </button>
    </div>
  );
};

export default WorkoutDetails;