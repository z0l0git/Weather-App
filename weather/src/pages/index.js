import { DaySection } from "@/components/DaySection";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="flex items-center justify-center h-screen bg-gray-600 font-manrope"
      style={manrope.style}
    >
      <DaySection />
    </div>
  );
}
