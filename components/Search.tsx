import { FiSearch } from "react-icons/fi";

export default function Search() {
  return (
    <div className="search flex w-full items-center gap-2 bg-inputbg p-2 rounded-md border border-inputborder">
      <FiSearch size={22} />
      <input type="text" className="text-input w-full bg-inputbg" />
    </div>
  );
}
