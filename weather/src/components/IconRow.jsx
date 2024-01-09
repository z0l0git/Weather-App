import { IoLocationOutline } from "react-icons/io5";
import { BiHomeAlt } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { LiaUserNinjaSolid } from "react-icons/lia";

export const IconRow = (props) => {
  const { checkI = true } = props;
  const dIcon = "Icon";
  const nIcon = "IconNight";
  return (
    <div className="flex items-center justify-between w-full mt-[48px]">
      <BiHomeAlt
        size={25}
        color="gray"
        className={`${checkI ? dIcon : nIcon}`}
      />
      <IoLocationOutline
        size={25}
        color="gray"
        className={`${checkI ? dIcon : nIcon}`}
      />
      <FaRegHeart
        size={23}
        color="gray"
        className={`${checkI ? dIcon : nIcon}`}
      />
      <LiaUserNinjaSolid
        size={25}
        color="gray"
        className={`${checkI ? dIcon : nIcon}`}
      />
    </div>
  );
};
