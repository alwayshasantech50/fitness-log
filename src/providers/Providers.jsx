"use client";

import { PlanProvider } from "@/context/PlanContext";

const Providers = ({ children }) => {
  return (
    <PlanProvider>
      {children}
    </PlanProvider>
  );
};

export default Providers;