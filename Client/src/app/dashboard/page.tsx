"use client";

import CardPopularProducts from "./CardPopularProducts";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custome-grid-rows">
      <CardPopularProducts />
      <div className="bg-gray-500 row-span-3 xl:row-span-6" />
      <div className="bg-gray-500 row-span-3 xl:row-span-6 " />
      <div className="bg-gray-500 row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 " />
      <div className="bg-gray-500 row-span-3" />
      <div className="bg-gray-500 md:row-span-3 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-3 xl:row-span-2" />
    </div>
  );
};

export default Dashboard;
