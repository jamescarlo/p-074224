import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-white flex w-full items-stretch gap-5 flex-wrap justify-between pl-[31px] pr-[74px] py-[13px] max-md:max-w-full max-md:px-5">
      <div className="flex items-stretch gap-[25px] text-[rgba(32,34,36,1)] whitespace-nowrap text-center my-auto max-md:max-w-full">
        <div className="text-[22px] font-medium grow my-auto"></div>
        <div className="bg-blend-normal bg-[rgba(245,246,250,1)] border text-sm font-normal grow shrink-0 basis-0 w-fit px-[45px] py-2.5 rounded-[19px] border-[rgba(213,213,213,1)] border-solid max-md:px-5">
          Search
        </div>
      </div>
      <div className="flex items-stretch gap-[40px_46px]">
        <div className="flex items-stretch gap-4 text-sm text-[rgba(100,100,100,1)] font-semibold whitespace-nowrap my-auto">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/84a673a6338edfdaac7657bc433d2b5ff19849c4?placeholderIfAbsent=true"
            alt="Notification icon"
            className="aspect-[0.94] object-contain w-[30px] shrink-0 rounded-[0px_0px_0px_0px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/f0790716367e345c35880329e359db8c764a7916?placeholderIfAbsent=true"
            alt="Message icon"
            className="aspect-[1.48] object-contain w-10 shrink-0 mt-1 rounded-[0px_0px_0px_0px]"
          />
          <div>English</div>
        </div>
        <div className="flex items-stretch gap-5">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/60303a3fa873ec392b8d3245631bd277cd48559d?placeholderIfAbsent=true"
            alt="Profile picture"
            className="aspect-[1] object-contain w-11 shrink-0"
          />
          <div className="flex flex-col items-stretch my-auto">
            <div className="text-neutral-700 text-sm font-bold">Moni Roy</div>
            <div className="text-[rgba(86,86,86,1)] text-xs font-semibold">
              Admin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
