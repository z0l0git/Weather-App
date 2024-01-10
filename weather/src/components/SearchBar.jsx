import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

import axios from "axios";

// Call the function to fetch data

export const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]);
  const cityName = input;

  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoidHVydXV1dSIsImEiOiJjbDBhZW15ZHAwMGhjM2RtZjB6dnltZnhjIn0.HSb4dmJFSM2USxDkTsScDg`;

  const fetchCityData = async () => {
    const response = await axios.get(url);
    const cityData = response.data.features[0].place_name;

    setCities([...cities, cityData]);
    console.log(cities);
  };

  useEffect(() => {
    fetchCityData();
  }, [input]);

  return (
    <div className="flex flex-col items-center  mb-[100px]">
      <div className="flex items-center rounded-[48px] bg-white px-[24px] py-[16px] gap-[10px] w-[400px]">
        <FaMagnifyingGlass size={15} style={{ color: "gray" }} />
        <input
          type="text"
          placeholder="Search"
          className="w-full outline-none"
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="flex flex-col rounded-[20px] bg-[#FFF00] bg-white px-[24px] py-[16px] gap-[10px] w-[400px] mt-[10px] absolute z-20 top-[160px] overflow-hidden h-[200px]">
        {cities.map((com, i) => {
          return (
            <div className="flex gap-[10px]" key={i}>
              <IoLocationOutline size={25} color="lightgray" />
              <p>{com}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
