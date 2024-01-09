import { DaySection } from "@/components/DaySection";
import { NightSection } from "@/components/NightSection";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-black font-manrope rounded-[50px] overflow-hidden"
      style={manrope.style}
    >
      <div className="w-1/2 h-full bg-[#F3F4F6] flex items-center justify-center">
        <DaySection />
      </div>
      <div className="w-1/2 h-full bg-[#0F141E] flex items-center justify-center">
        <NightSection />
      </div>
    </div>
  );
}
