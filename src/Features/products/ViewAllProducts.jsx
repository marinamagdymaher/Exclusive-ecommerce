import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useProducts } from "../../Components/Helper/ProductContext";

// eslint-disable-next-line react/prop-types
export default function ViewAllProducts() {
    const {products} =useProducts()
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-10">
      {products.map((prd) => (
        <Link key={prd.id} to={`/products/${prd.id}`}>
          <Card prd={prd} />
        </Link>
      ))}
    </div>
  );
}
