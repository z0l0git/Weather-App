import { DateLocation } from "@/components/DateLocation";
import { IconRow } from "@/components/IconRow";
import { Celcius } from "@/components/Celcius";
import { useState } from "react";
// import { SearchBar } from "@/components/SearchBar";

import Image from "next/image";

export const Weather = (props) => {
  const {
    bg = "#F3F4F6",
    imgSrc = "",
    check = true,
    location = "Ulaanbaatar",
  } = props;
  const dStyle = { backgroundColor: `${bg}` };
  const nStyle = {
    backgroundColor: `${bg}`,
    background: `linear-gradient(180deg, #1F2937 0%, rgba(17, 24, 39, 0.00) 100%);

    )`,
  };
  const dimgBg = "bg-yellow-300";
  const nimgBg = "bg-white";

  const [temp, setTemp] = useState(0);
  const [mainDay, setMainDay] = useState("");

  const fetchData = async () => {
    const hour = new Date().getHours();
    const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=en&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    const mainDay = data.weather[0].main;
    const dtemp = data.main.temp_max;
    const ntemp = data.main.temp_min;

    setTemp(check ? dtemp : ntemp);
    setMainDay(mainDay);
  };

  return (
    <div
      className={`flex flex-col items-center justify-start bg-[${bg}] rounded-[48px] p-[48px] w-fit`}
      style={check ? dStyle : nStyle}
    >
      <DateLocation location="Mongolia" Dcheck={check} />
      <div
        className="mt-[46px] w-[200px] h-[200px] rounded-full flex items-center justify-center"
        onClick={() => {
          fetchData();
        }}
      >
        <div
          className={`absolute z-0 w-[160px] h-[160px] rounded-full ${
            check ? dimgBg : nimgBg
          } blur-2xl`}
        ></div>
        <Image
          className="absolute z-10"
          src={imgSrc}
          width={260}
          height={260}
          priority={true}
          alt="weather icon"
        ></Image>
      </div>
      <Celcius dayCheck={check} cUnit={temp} dayState={mainDay} />
      <IconRow checkI={check} />
    </div>
  );
};

// fJQJNW+jdIo5mmJ0i2zcow==sihzlyMvxGoIyt8s
