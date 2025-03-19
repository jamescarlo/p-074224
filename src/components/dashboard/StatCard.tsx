import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: {
    value: string;
    isPositive: boolean;
    text: string;
  };
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change }) => {
  const changeColor = change.isPositive
    ? "text-[rgba(0,182,155,1)]"
    : "text-[rgba(249,60,101,1)]";

  return (
    <div className="bg-white shadow-[6px_6px_54px_rgba(0,0,0,0.05)] flex grow flex-col text-base text-[rgba(32,34,36,1)] font-semibold w-full px-4 py-[17px] rounded-[14px]">
      <div className="bg-blend-normal">{title}</div>
      <div className="text-[28px] font-bold tracking-[1px] mt-4">{value}</div>
      <div className={`${changeColor} mt-[30px]`}>
        <span className={changeColor}>{change.value}</span>{" "}
        <span className="text-[rgba(96,96,96,1)]">{change.text}</span>
      </div>
    </div>
  );
};

export default StatCard;
