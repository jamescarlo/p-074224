import React from "react";

const DealsTable: React.FC = () => {
  return (
    <div className="bg-white shadow-[6px_6px_54px_rgba(0,0,0,0.05)] flex w-full flex-col items-stretch pt-8 pb-[15px] px-8 rounded-[14px] max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-5 leading-none flex-wrap justify-between max-md:max-w-full">
        <div className="text-[rgba(32,34,36,1)] text-2xl font-bold my-auto">
          Deals Details
        </div>
        <div className="rounded bg-[rgba(252,253,253,1)] border text-xs text-[#2b3034] font-medium whitespace-nowrap text-right px-[17px] py-[9px] border-[rgba(213,213,213,1)] border-solid max-md:pr-5">
          October
        </div>
      </div>
      <div className="bg-[rgba(241,244,249,1)] flex w-full items-stretch gap-5 text-sm text-[rgba(32,34,36,1)] font-bold flex-wrap justify-between mt-8 pl-6 pr-[62px] py-[15px] rounded-xl max-md:max-w-full max-md:px-5">
        <div className="flex items-stretch gap-[40px_100px] max-md:max-w-full">
          <div>Product Name</div>
          <div>Location</div>
          <div>Date - Time</div>
        </div>
        <div className="flex items-stretch gap-[40px_72px] whitespace-nowrap">
          <div>Piece</div>
          <div>Amount</div>
          <div>Status</div>
        </div>
      </div>
      <div className="self-center flex w-full max-w-[1013px] items-stretch gap-[40px_74px] text-sm text-[rgba(32,34,36,1)] font-semibold flex-wrap mt-6 max-md:max-w-full">
        <div className="flex items-stretch gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/4dfb02be47805810b7f0b8f7099ca99ca098473f?placeholderIfAbsent=true"
            alt="Apple Watch"
            className="aspect-[1] object-contain w-9 shrink-0 rounded-[0px_0px_0px_0px]"
          />
          <div className="bg-blend-normal my-auto">Apple Watch</div>
        </div>
        <div className="flex items-center gap-[40px_78px] flex-wrap grow shrink basis-auto my-auto max-md:max-w-full">
          <div className="bg-blend-normal self-stretch grow my-auto">
            6096 Marjolaine Landing
          </div>
          <div className="bg-blend-normal self-stretch basis-auto my-auto">
            12.09.2019 - 12.53 PM
          </div>
          <div className="bg-blend-normal self-stretch my-auto">423</div>
          <div className="bg-blend-normal self-stretch my-auto">$34,295</div>
          <div className="bg-[rgba(0,182,155,1)] self-stretch text-white font-bold whitespace-nowrap px-4 py-1 rounded-[14px]">
            Delivered
          </div>
        </div>
      </div>
      <div className="h-px bg-gray-200 w-full mt-5" />
    </div>
  );
};

export default DealsTable;
