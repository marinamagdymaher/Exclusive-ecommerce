import { Link, NavLink } from "react-router-dom";
import Card from "./Card";
import Button from "../../Components/Button";
import { faHeart, faEye } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
export default function Products({ products }) {
  const limitProduct = products.slice(0, 8);

  return (
    <div className="flex justify-center flex-col">
      {" "}
      <div className="text-red-200 font-semibold flex gap-5 py-5">
        <span className="border-8"></span>
        <h3>Our Products</h3>
      </div>
      <h4 className="text-4xl font-bold mb-6">Explore Our Products</h4>
      {limitProduct.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {limitProduct.map((prd) => (
            <Link key={prd.id} to={`/products/${prd.id}`}>
              <Card prd={prd} icon={faHeart} secondIcon={faEye} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">No products available.</p>
      )}
      <NavLink to={"/products"} className="text-center">
        <Button buttonTitle="View All Products" />
      </NavLink>
    </div>
  );
}
