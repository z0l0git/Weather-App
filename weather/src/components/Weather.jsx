import { IoLocationOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { LiaUserNinjaSolid } from "react-icons/lia";

import Image from "next/image";

export const Weather = () => {
  return (
    <div className="flex flex-col items-center bg-white rounded-[48px] p-[48px] w-[414px]">
      <div className="flex items-center justify-between w-full">
        <div>
          <p className="text-sm text-gray-500">January 9 2023</p>
          <h1 className="text-3xl font-[800] text-black">Mongolia</h1>
        </div>
        <IoLocationOutline className="text-xl text-gray-500" />
      </div>
      <div>
        <Image src={"/sun.png"} width={200} height={200}></Image>
      </div>
      <div>
        <p
          className="text-[144px] font-[800] text-transparent bg-clip-text bg-gradient-to-t from-gray-700 via-gray-900 to-black "
          style={{
            background:
              "linear-gradient(180deg, #111827 0%, #6B7280 100%), linear-gradient(180deg, #111827 0%, #6B7280 100%))",
          }}
        >
          26°
        </p>
      </div>
      <div>
        <p className="text-[#FF8E27] text-[24px] font-[800]">Bright</p>
      </div>
      <div className="flex items-center justify-between w-full">
        <FiHome></FiHome>
        <IoLocationOutline></IoLocationOutline>
        <CiHeart></CiHeart>
        <LiaUserNinjaSolid></LiaUserNinjaSolid>
      </div>
    </div>
  );
};
