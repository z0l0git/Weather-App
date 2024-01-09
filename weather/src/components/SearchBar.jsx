import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBar = () => {
  return (
    <div className="flex items-center rounded-[48px] bg-white px-[24px] py-[16px] gap-[10px] w-[400px]">
      <FaMagnifyingGlass size={15} style={{ color: "gray" }} />
      <input type="text" placeholder="Search" className="w-full outline-none" />
    </div>
  );
};
