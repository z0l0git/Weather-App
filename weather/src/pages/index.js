import { DaySection } from "@/components/DaySection";
import { NightSection } from "@/components/NightSection";
import { Manrope } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import axios from "axios";
import { useState, useEffect } from "react";
import React, { Component } from "react";

import Weather from "@/components/Weather";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  const [location, setLocation] = useState("Space");
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]);

  const [day, setDay] = useState("Clear");
  const [tempd, setDtemp] = useState("0");
  const [tempn, setNtemp] = useState("0");

  const cityName = input;
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;

  const fetchCityData = async () => {
    const response = await axios.get(url);
    setCities(response.data.features);
  };

  useEffect(() => {
    fetchCityData();
  }, [input]);

  useEffect(() => {
    if (input.length > 0) {
      setSearch(true);
    } else if (input.split(",")[0] === location) {
      setSearch(false);
    } else {
      setSearch(false);
    }
  }, [input]);

  const handleClick = async (name) => {
    setSearch(false);
    const api_key = "7c91776fb1267161889e298c3e7ceb4b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cities[0].place_name}&lang=en&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    const dtemp = data.main.temp_max;
    const ntemp = data.main.temp_min;
    const mainDay = data.weather[0].main;

    console.log(ntemp);

    setDtemp(dtemp);
    setNtemp(ntemp);
    setDay(mainDay);

    console.log(mainDay);
    setLocation(name);
    setInput(name);
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center h-fit md:h-screen bg-black font-manrope rounded-[50px] md:overflow-hidden"
      style={manrope.style}
    >
      <div
        className="flex 
      w-1/2 h-full bg-none md:bg-[#C0C2C9] flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center mb-[30px]">
          <div className="flex items-center rounded-[48px] bg-white px-[24px] py-[16px] gap-[10px] w-[400px]">
            <FaMagnifyingGlass size={15} style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          {search && (
            <div className="flex flex-col rounded-[20px] bg-[#FFF00] bg-white px-[24px] py-[16px] gap-[10px] w-[400px] mt-[10px] absolute z-20 top-[60px] md:top-[190px] h-fit">
              {cities.length > 0 &&
                cities.map((com, i) => {
                  return (
                    <div
                      className="flex gap-[10px] cursor-pointer"
                      key={i}
                      id={i}
                      onClick={() => {
                        handleClick(com.place_name);
                      }}
                    >
                      <IoLocationOutline size={25} color="lightgray" />
                      <p id={`loc${i}`}>{com.place_name}</p>
                    </div>
                  );
                })}
            </div>
          )}
        </div>

        <DaySection
          locate={location}
          dcel={tempd.toString().split(".")[0]}
          day={day}
        />
      </div>
      <div className="w-1/2 h-full bg-none md:bg-[#0F141E] flex items-center justify-center">
        <NightSection
          locateN={location}
          ncel={tempn.toString().split(".")[0]}
          day={day}
        />
      </div>
    </div>
  );
}
