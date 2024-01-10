import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";
import { useState, useEffect } from "react";

import axios from "axios";

// Call the function to fetch data

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState("");
  const [cities, setCities] = useState([]);

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
    } else {
      setSearch(false);
    }
  }, [input]);

  const handleClick = (name) => {
    setLocation(name);
    setInput(name);
    console.log(location);
    setSearch(false);
    return location;
  };

  return (
    <div className="flex flex-col items-center  mb-[30px]">
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
        <div className="flex flex-col rounded-[20px] bg-[#FFF00] bg-white px-[24px] py-[16px] gap-[10px] w-[400px] mt-[10px] absolute z-20 top-[60px] h-fit">
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
  );
};
