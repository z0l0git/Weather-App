import { DaySection } from "@/components/DaySection";
import { NightSection } from "@/components/NightSection";
import { Manrope } from "next/font/google";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div
      className="flex items-center justify-center h-screen bg-black font-manrope rounded-[50px] overflow-hidden"
      style={manrope.style}
    >
      <div
        className="flex 
      w-1/2 h-full bg-[#C0C2C9] flex-col items-center justify-center"
      >
        <SearchBar />
        <DaySection />
      </div>
      <div className="w-1/2 h-full bg-[#0F141E] flex items-center justify-center">
        <NightSection />
      </div>
    </div>
  );
}
