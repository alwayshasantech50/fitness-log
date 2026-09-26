"use client";

import { useEffect, useState } from "react";
import WorkoutCard from "./WorkoutCard";
import Loading from "../shared/Loading";

const Library = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("https://api.api-store.workers.dev/api/fitlog");

        const data = await res.json();

        setWorkouts(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <section id="library" className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          THE LIBRARY
        </h2>

        <p className="text-gray-400">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {/* Loading */}

      {loading && <Loading />}

      {/* Grid */}

      {!loading && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Library;
