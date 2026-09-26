"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load saved workouts when the app starts
  useEffect(() => {
    try {
      const storedPlan = JSON.parse(localStorage.getItem("todayPlan")) || [];
      const storedSaved =
        JSON.parse(localStorage.getItem("savedWorkouts")) || [];

      setTodayPlan(Array.isArray(storedPlan) ? storedPlan : []);
      setSavedWorkouts(Array.isArray(storedSaved) ? storedSaved : []);
    } catch (error) {
      console.error("Could not load saved workouts:", error);
      setTodayPlan([]);
      setSavedWorkouts([]);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes only after the stored data has loaded
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("todayPlan", JSON.stringify(todayPlan));
    }
  }, [todayPlan, isLoaded]);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("savedWorkouts", JSON.stringify(savedWorkouts));
    }
  }, [savedWorkouts, isLoaded]);

  const addToPlan = (workout) => {
    const alreadyAdded = todayPlan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      return false;
    }

    if (todayPlan.length >= 5) {
      return "limit";
    }

    setTodayPlan((currentPlan) => [...currentPlan, workout]);
    return true;
  };

  const addToSaved = (workout) => {
    const alreadySaved = savedWorkouts.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return false;
    }

    setSavedWorkouts((currentSaved) => [...currentSaved, workout]);
    return true;
  };

  const removeFromPlan = (id) => {
    setTodayPlan((currentPlan) =>
      currentPlan.filter((item) => item.id !== id)
    );
  };

  const removeFromSaved = (id) => {
    setSavedWorkouts((currentSaved) =>
      currentSaved.filter((item) => item.id !== id)
    );
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
        isLoaded,
        addToPlan,
        addToSaved,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);