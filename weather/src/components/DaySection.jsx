import { SearchBar } from "@/components/SearchBar";
import { Weather } from "@/components/Weather";

export const DaySection = (props) => {
  const { locate, dcel, day } = props;
  return (
    <div className="flex flex-col justify-center items-end h-fit ">
      <Weather
        imgSrc="/sun.png"
        bg="#FFF"
        check={true}
        location={locate}
        celcius={dcel}
        day={day}
      />
    </div>
  );
};
