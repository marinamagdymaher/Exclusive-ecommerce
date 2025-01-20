import Category from "../Components/Category/Category";
import Circles from "../Components/Circles";
import NewArrival from "../Components/NewArrival/NewArrival";
import Products from "../Features/products/Products";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import BestSelling from "../Features/products/BestSelling";
import FlashSale from "../Components/FlashSale";


// eslint-disable-next-line react/prop-types
export default function Home() {

  return (
    <div className="px-5 py-10">
      <div className="flex justify-between mt-6 gap-4">
        <Sidebar />
        <div>
          <img src="/Frame 560.png" alt="logo" className="py-8" />
        </div>
      </div>
      <FlashSale smallTitle="Today’s" mainTitle="Flash Sales" />
      <Category />
      <BestSelling />
      <MusicExperience />
      <Products />
      <NewArrival />
      <Circles />
    </div>
  );
}

function Sidebar() {
  const content = [
    { title: "Woman’s Fashion", icon: faAngleRight },
    { title: "Men’s Fashion", icon: faAngleRight },
    { title: "Electronics" },
    { title: "Home & Lifestyle" },
    { title: "Medicine" },
    { title: "Sports & Outdoor" },
    { title: "Baby’s & Toys" },
    { title: "Groceries & Pets" },
    { title: "Health & Beauty" },
  ];

  return (
    <div className="md:w-1/4 border-r border-grey-200 py-5 ">
      <ul className="space-y-2 ">
        {content.map((item, index) => (
          <li
            key={index}
            className="p-2 rounded-md cursor-pointer flex justify-between items-center gap-2 hover:bg-grey-50"
          >
            {item.title}
            {item.icon && <FontAwesomeIcon icon={item.icon} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MusicExperience() {
  return (
    <img
      src="/Frame 600.png"
      alt="Frame 600.png"
      className="w-[100%] h-96 py-5"
    />
  );
}
