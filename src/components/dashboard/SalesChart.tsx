import React from "react";

const SalesChart: React.FC = () => {
  return (
    <div className="bg-white shadow-[6px_6px_54px_rgba(0,0,0,0.05)] w-full pt-8 pb-[58px] px-8 rounded-[14px] max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-5 leading-none flex-wrap justify-between max-md:max-w-full">
        <div className="text-[rgba(32,34,36,1)] text-2xl font-bold my-auto">
          Sales Details
        </div>
        <div className="rounded bg-[rgba(252,253,253,1)] border text-xs text-[#2b3034] font-semibold whitespace-nowrap text-right px-[19px] py-[9px] border-[rgba(213,213,213,1)] border-solid max-md:pr-5">
          October
        </div>
      </div>
      <div className="flex items-stretch gap-10 text-xs text-[#2b3034] font-semibold whitespace-nowrap leading-none flex-wrap mt-12 max-md:mt-10">
        <div className="flex flex-col">
          <div className="self-stretch">100%</div>
          <div className="mt-[50px] max-md:mt-10">80%</div>
          <div className="mt-[50px] max-md:mt-10">60%</div>
          <div className="mt-[50px] max-md:mt-10">40%</div>
          <div className="mt-[50px] max-md:mt-10">20%</div>
        </div>
        <div className="text-center grow shrink-0 basis-0 w-fit mt-1 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/730762f560d41260f30819a58c40f4974b336131?placeholderIfAbsent=true"
            alt="Sales chart"
            className="aspect-[4.13] object-contain w-full bg-blend-normal max-md:max-w-full"
          />
          <div className="flex w-[961px] max-w-full items-stretch gap-[40px_63px] flex-wrap mt-[23px]">
            <div className="grow">5k</div>
            <div>10k</div>
            <div>15k</div>
            <div>20k</div>
            <div>25k</div>
            <div>30k</div>
            <div>35k</div>
            <div>40k</div>
            <div>45k</div>
            <div>50k</div>
            <div>55k</div>
            <div>60k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
