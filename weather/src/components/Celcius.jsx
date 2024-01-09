export const Celcius = (props) => {
  const { cUnit, dayState, dayCheck = true } = props;

  const dayStyle =
    "bg-clip-text bg-gradient-to-t from-gray-700 via-gray-900 to-black";

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
        >
          26°
        </p>
      </div>
      <div>
        <p
          className={`text-${
            dayCheck ? stateD : stateN
          } text-[24px] font-[800]`}
        >
          Bright
        </p>
      </div>
    </div>
  );
};
