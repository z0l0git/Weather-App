import { Weather } from "@/components/Weather";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const NightSection = () => {
  return (
    <div className="flex flex-col justify-center items-end">
      <div className=" h-[100px] "></div>
      <Weather
        imgSrc="/moon.png"
        bg="#111827BF"
        check={false}
        className="mt-[56px]"
      />
    </div>
  );
};
