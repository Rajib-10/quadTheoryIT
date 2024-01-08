import { useEffect, useState } from "react";
import PopularCard from "./PopularCard";

const Popular = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
    )
      .then((res) => res.json())
      .then((data) => setItems(data.Items));
  }, []);
  
  return (
    <div className="lg:w-[80%] mx-auto mt-[120px] p-2 ">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-xl font-medium ">Popular </h1>
        <h1 className=" text-[#FD6011] hidden lg:block">
          AddMore <span className="text-black opacity-50">&lt;</span>
          <span className="text-black ">&gt;</span>

        </h1>
        <span className="text-black md:hidden">&gt;</span>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {
        items?.slice(0,5).map(item=><PopularCard key={item.Id} item={item} />)
      }
      </div>
    </div>
  );
};

export default Popular;
