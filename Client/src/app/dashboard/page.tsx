"use client";

import CardPopularProducts from "./CardPopularProducts";
import CardSalesSumary from "./CardSaleSumary";
import CardPurchaseSummary from "./CardPurchaseSummary";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custome-grid-rows">
      <CardPopularProducts />
      <CardSalesSumary />
      <CardPurchaseSummary />
      <div className="bg-gray-500 row-span-3" />
      <div className="bg-gray-500 md:row-span-3 xl:row-span-2" />
      <div className="bg-gray-500 md:row-span-3 xl:row-span-2" />
    </div>
  );
};

export default Dashboard;
