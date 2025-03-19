import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-white flex w-full flex-col items-stretch mx-auto pt-6 pb-[103px] max-md:pb-[100px]">
      <div className="flex w-full flex-col px-10 max-md:px-5">
        <div className="text-[rgba(72,128,255,1)] text-xl font-extrabold self-center">
          Dash<span className="text-[rgba(32,34,36,1)]">Stack</span>
        </div>
        <div className="flex items-stretch gap-4 text-white whitespace-nowrap mt-[43px] max-md:mt-10">
          <div className="text-[22px] font-medium text-center"></div>
          <div className="text-sm font-semibold tracking-[0.3px] my-auto">
            Dashboard
          </div>
        </div>
      </div>

      <NavItem label="Products" />
      <NavItem label="Favorites" />
      <NavItem label="Inbox" />
      <NavItem label="Order Lists" />
      <NavItem label="Product Stock" />

      <div className="h-px bg-gray-200 w-full mt-4" />

      <div className="text-[rgba(32,34,36,1)] text-xs font-bold tracking-[0.26px] ml-10 mt-4 max-md:ml-2.5">
        PAGES
      </div>

      <NavItem label="Pricing" />
      <NavItem label="Calender" />
      <NavItem label="To-Do" />
      <NavItem label="Contact" />
      <NavItem label="Invoice" />
      <NavItem label="UI Elements" />
      <NavItem label="Team" />
      <NavItem label="Table" />

      <div className="h-px bg-gray-200 w-full mt-4" />

      <NavItem label="Settings" className="mt-4" />

      <div className="flex items-stretch gap-4 text-[rgba(32,34,36,1)] whitespace-nowrap ml-10 mt-[13px] max-md:ml-2.5">
        <div className="text-[22px] font-medium text-center"></div>
        <div className="text-sm font-semibold tracking-[0.3px] my-auto">
          Logout
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  label: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ label, className = "" }) => {
  return (
    <div
      className={`bg-blend-normal bg-white flex items-stretch gap-4 text-[rgba(32,34,36,1)] whitespace-nowrap px-10 py-[13px] max-md:px-5 ${className}`}
    >
      <div className="text-[22px] font-medium text-center"></div>
      <div className="text-sm font-semibold tracking-[0.3px] grow shrink w-[118px] my-auto">
        {label}
      </div>
    </div>
  );
};

export default Sidebar;
