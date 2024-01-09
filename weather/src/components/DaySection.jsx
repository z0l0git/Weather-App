import { SearchBar } from "@/components/SearchBar";
import { Weather } from "@/components/Weather";

export const DaySection = () => {
  return (
    <div className="flex flex-col justify-center items-end">
      <SearchBar />
      <Weather />
    </div>
  );
};
