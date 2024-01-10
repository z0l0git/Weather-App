import { data } from "autoprefixer";

export const Celcius = (props) => {
  const { cUnit = "0", dayState = "Clear", dayCheck = true } = props;

  const dayStyle = "bg-clip-text bg-gradient-to-t from-slate-50 to-slate-900";

  const nightStyle = "bg-clip-text bg-gradient-to-t from-slate-900 to-slate-50";

  const stateD = " orange";
  const stateN = " blue";

  return (
    <div className="flex flex-col items-start w-full">
      <div>
        <p
          className={`text-[100px] font-[800] text-transparent ${
            dayCheck ? dayStyle : nightStyle
          }`}
          onClick={() => {
            fetchData();
          }}
        >
          {cUnit.toString().split(".")[0]}
        </p>
      </div>
      <div>
        <p
          className={`text-${
            dayCheck ? stateD : stateN
          } text-[24px] font-[800]`}
        >
          {dayState}
        </p>
      </div>
    </div>
  );
};
