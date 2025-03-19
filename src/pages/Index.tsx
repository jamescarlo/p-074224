import React from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import TopBar from "@/components/dashboard/TopBar";
import StatCard from "@/components/dashboard/StatCard";
import SalesChart from "@/components/dashboard/SalesChart";
import DealsTable from "@/components/dashboard/DealsTable";

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden min-h-screen">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        {/* Sidebar */}
        <div className="w-[17%] max-md:w-full max-md:ml-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="w-[83%] ml-5 max-md:w-full max-md:ml-0">
          <div className="bg-[rgba(245,246,250,1)] w-full mx-auto px-px max-md:max-w-full">
            {/* Top Bar */}
            <TopBar />

            {/* Divider */}
            <div className="h-px bg-gray-200 w-full" />

            {/* Main Content Area */}
            <div className="z-10 flex flex-col items-stretch ml-[30px] mr-8 max-md:max-w-full max-md:mr-2.5 py-8">
              <h1 className="text-[rgba(32,34,36,1)] text-[32px] font-bold tracking-[-0.11px]">
                Dashboard
              </h1>

              {/* Stats Row */}
              <div className="mt-[27px] max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
                  {/* Chart Image */}
                  <div className="w-3/12 max-md:w-full max-md:ml-0">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets/f9c27e5b6e85449a85aa3f3e7207a1e5/22abb3af442db09d7255a2d8681ec7bffcc55906?placeholderIfAbsent=true"
                      alt="Statistics chart"
                      className="aspect-[1.63] object-contain w-[262px] shrink-0 max-w-full grow rounded-[0px_0px_0px_0px] max-md:mt-[30px]"
                    />
                  </div>

                  {/* Stat Cards */}
                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <StatCard
                      title="Total Order"
                      value="10293"
                      change={{
                        value: "1.3%",
                        isPositive: true,
                        text: "Up from past week",
                      }}
                    />
                  </div>

                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <StatCard
                      title="Total Sales"
                      value="$89,000"
                      change={{
                        value: "4.3%",
                        isPositive: false,
                        text: "Down from yesterday",
                      }}
                    />
                  </div>

                  <div className="w-3/12 ml-5 max-md:w-full max-md:ml-0">
                    <StatCard
                      title="Total Pending"
                      value="2040"
                      change={{
                        value: "1.8%",
                        isPositive: true,
                        text: "Up from yesterday",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Sales Chart */}
              <div className="mt-[30px]">
                <SalesChart />
              </div>

              {/* Deals Table */}
              <div className="mt-7">
                <DealsTable />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
