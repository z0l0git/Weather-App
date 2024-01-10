import { Weather } from "@/components/Weather";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const NightSection = (props) => {
  const { locateN, ncel, day } = props;
  return (
    <div className="flex flex-col justify-center items-end h-fit">
      <div className=" h-[100px] "></div>
      <Weather
        imgSrc="/moon.png"
        bg="#111827BF"
        check={false}
        className="mt-[56px]"
        location={locateN}
        nightcel={ncel}
        day={day}
      />
    </div>
  );
};
