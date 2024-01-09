import { DateLocation } from "@/components/DateLocation";
import { IconRow } from "@/components/IconRow";
import { Celcius } from "@/components/Celcius";

import Image from "next/image";

export const Weather = (props) => {
  const { bg = "#F3F4F6", imgSrc = "", check = true } = props;
  const dStyle = { backgroundColor: `${bg}` };
  const nStyle = {
    backgroundColor: `${bg}`,
    background: `linear-gradient(180deg, #1F2937 0%, rgba(17, 24, 39, 0.00) 100%);

    )`,
  };

  return (
    <div
      className={`flex flex-col items-center justify-start bg-[${bg}] rounded-[48px] p-[48px] w-[350px]`}
      style={check ? dStyle : nStyle}
    >
      <DateLocation location="Mongolia" Dcheck={check} />
      <div className="mt-[46px]">
        <Image src={imgSrc} width={160} height={160}></Image>
      </div>
      <Celcius dayCheck={check} />
      <IconRow checkI={check} />
    </div>
  );
};
