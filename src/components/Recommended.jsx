import { useEffect, useState } from "react";
import RecommendedCard from "./RecommendedCard";


const Recommended = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.Items));
  }, []);
  
  return (
    <div className="lg:w-[80%] mx-auto mt-[40px] p-2 ">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-medium ">Recommended </h1>
        <h1 className=" text-[#FD6011] hidden lg:block">
          AddMore <span className="text-black opacity-50">&lt;</span>
          <span className="text-black">&gt;</span>
        </h1>
        <span className="text-black md:hidden">&gt;</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {
        items?.slice(3).map(item=><RecommendedCard key={item.Id} item={item} />)
      }
      </div>
    </div>
  );
};

export default Recommended;
