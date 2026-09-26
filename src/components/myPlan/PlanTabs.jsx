const PlanTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="inline-flex rounded-xl border border-[#242b38] bg-[#141820] p-1">
      {[
        { value: "plan", label: "Today's Plan" },
        { value: "saved", label: "Saved" },
      ].map((tab) => (
        <button
          key={tab.value}
          type="button"
          onClick={() => setActiveTab(tab.value)}
          className={`rounded-lg px-4 py-2 text-sm transition ${
            activeTab === tab.value
              ? "bg-[#252b36] font-semibold text-white"
              : "text-gray-400 hover:text-white"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default PlanTabs;