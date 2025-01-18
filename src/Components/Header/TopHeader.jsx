import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function TopHeader() {
  return (
    <div className=" bg-black text-white flex items-center justify-between p-4 flex-col md:flex-row gap-4">
      {/* Sale Message */}
      <p></p>
      <p className="text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <a href="#" className="font-bold underline">
          ShopNow
        </a>
      </p>

      {/* Language Selector */}
      <div className="flex items-center gap-2 ">
        <p>English</p>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
    </div>
  );
}

