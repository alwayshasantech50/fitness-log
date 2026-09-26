"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [todayPlan, setTodayPlan] = useState([]);
  const [savedWorkouts, setSavedWorkouts] = useState([]);

  useEffect(() => {
    const storedPlan =
      JSON.parse(localStorage.getItem("todayPlan")) || [];

    const storedSaved =
      JSON.parse(localStorage.getItem("savedWorkouts")) || [];

    setTodayPlan(storedPlan);
    setSavedWorkouts(storedSaved);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "todayPlan",
      JSON.stringify(todayPlan)
    );
  }, [todayPlan]);

  useEffect(() => {
    localStorage.setItem(
      "savedWorkouts",
      JSON.stringify(savedWorkouts)
    );
  }, [savedWorkouts]);

  const addToPlan = (workout) => {
    const exists = todayPlan.find(
      (item) => item.id === workout.id
    );

    if (exists) {
      return false;
    }

    if (todayPlan.length >= 5) {
      return "limit";
    }

    setTodayPlan([...todayPlan, workout]);
    return true;
  };

  const addToSaved = (workout) => {
    const exists = savedWorkouts.find(
      (item) => item.id === workout.id
    );

    if (exists) {
      return false;
    }

    setSavedWorkouts([...savedWorkouts, workout]);
    return true;
  };

  const removeFromPlan = (id) => {
    setTodayPlan(
      todayPlan.filter((item) => item.id !== id)
    );
  };

  const removeFromSaved = (id) => {
    setSavedWorkouts(
      savedWorkouts.filter((item) => item.id !== id)
    );
  };

  return (
    <PlanContext.Provider
      value={{
        todayPlan,
        savedWorkouts,
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