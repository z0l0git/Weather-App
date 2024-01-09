import { IoLocationOutline } from "react-icons/io5";

export const DateLocation = (props) => {
  const { Dcheck = true } = props;
  const dayS = "[#000000]";
  const nightS = " white";

  let newDate = new Date();
  const {
    month = newDate.toLocaleString("default", { month: "long" }),
    date = newDate.getDate(),
    year = newDate.getFullYear(),
    location = "",
  } = props;

  return (
    <div className="flex items-center justify-between w-full">
      <div>
        <p className="text-[15px] text-gray-400">
          {month} {date}, {year}
        </p>
        <h2 className={`text-[38px] font-[800] text-${Dcheck ? dayS : nightS}`}>
          {location}
        </h2>
      </div>
      <IoLocationOutline size={32} className="text-xl text-gray-500" />
    </div>
  );
};
