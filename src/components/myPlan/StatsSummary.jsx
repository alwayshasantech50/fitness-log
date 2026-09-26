const StatsSummary = ({ exercises, minutes, calories }) => {
  const stats = [
    { label: "Exercises", value: exercises, accent: true },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="mb-6 grid grid-cols-3 rounded-xl border border-[#242b38] bg-[#141820] p-4 sm:p-6">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`min-w-0 px-2 sm:px-5 ${
            index > 0 ? "border-l border-[#242b38]" : ""
          }`}
        >
          <p className="text-xs text-gray-400 sm:text-sm">{stat.label}</p>
          <p
            className={`mt-1 text-2xl font-bold sm:text-4xl ${
              stat.accent ? "text-lime-400" : "text-white"
            }`}
          >
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSummary;