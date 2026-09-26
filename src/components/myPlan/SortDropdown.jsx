import { FaChevronDown } from "react-icons/fa";

const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex items-center gap-3 text-sm">
      <label htmlFor="plan-sort" className="text-gray-400">
        Sort By
      </label>

      <div className="relative">
        <select
          id="plan-sort"
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="appearance-none rounded-lg border border-[#242b38] bg-[#141820] py-2 pl-3 pr-9 text-white outline-none focus:border-lime-400"
        >
          <option value="duration">Duration</option>
          <option value="caloriesBurned">Calories</option>
          <option value="rating">Rating</option>
        </select>
        <FaChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400"
        />
      </div>
    </div>
  );
};

export default SortDropdown;