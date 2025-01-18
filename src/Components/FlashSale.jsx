import flashSale from "../../flashSale.json";
import Card from "../Features/products/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";

export default function FlashSale({
  smallTitle,
  mainTitle,
  color = "text-red-200",
}) {
  return (
    <div className="my-8 border-b-2 border-grey-200">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-red-200 font-semibold flex gap-5 py-5">
            <span className="border-8  "></span>
            <h3 className={`${color}`}>{smallTitle}</h3>
          </div>
          <h4 className="text-4xl font-bold mb-6">{mainTitle}</h4>
        </div>
        {/* <ArrowIcons /> */}
        <div>
          <span className="bg-secondary p-2 rounded-full mr-2">
            <FontAwesomeIcon icon={faArrowLeft} /> {/* Left Arrow */}
          </span>
          <span className="bg-secondary p-2 rounded-full">
            <FontAwesomeIcon icon={faArrowRight} /> {/* Right Arrow */}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {flashSale.length > 0 ? (
          flashSale.map((prd, i) => (
            <Card key={i} prd={prd} icon={faHeart} secondIcon={faEye} />
          ))
        ) : (
          <p className="col-span-4 text-center text-grey-500">
            No products available.
          </p>
        )}
      </div>
    </div>
  );
}
