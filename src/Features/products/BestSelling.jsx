import { Link, NavLink } from "react-router-dom";
import Card from "./Card";
import Button from "../../Components/Button";
import { faHeart,faEye } from "@fortawesome/free-solid-svg-icons";

export default function BestSelling({ products }) {
  const highRate = products.filter((prd) => prd.rating > 4).slice(0, 4);

  return (
    <div className="my-8">
      <div className="flex justify-between items-center">
        <div>
          <div className="text-red-200 font-semibold flex gap-5 py-5">
            <span className="border-8"></span>
            <h3>This Month</h3>
          </div>
          <h4 className="text-4xl font-bold mb-6">Best Selling Products</h4>
        </div>
        <NavLink to={"/AllBestSellingPrd"} className="text-center">
          <Button buttonTitle="View All" />
        </NavLink>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {highRate.length > 0 ? (
          highRate.map((prd, i) => (
            <Link key={i} to={`/products/${prd.id}`}>
              <Card prd={prd} icon={faHeart} secondIcon = {faEye}/>
            </Link>
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
