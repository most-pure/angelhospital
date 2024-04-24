import { FiSearch } from "react-icons/fi";

export default function Searchs() {
  return (
    <div className="search flex w-full items-center gap-2 bg-white p-2 rounded-xl border border-inputborder">
      <FiSearch size={20} />
      <input type="text" className="text-input w-full bg-inputbg" />
    </div>
  );
}
