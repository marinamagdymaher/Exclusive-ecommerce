import { Link } from "react-router-dom";
import Card from "./Card";
import { useEffect } from "react";
import { useProducts } from "../../Components/Helper/ProductContext";

export default function AllBestSellingPrd() {
    const {products} =useProducts()
  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  const highRate = products.filter((prd) => prd.rating > 4);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5 py-10">
      {highRate.map((prd) => (
        <Link key={prd.id} to={`/products/${prd.id}`}>
          <Card prd={prd} />
        </Link>
      ))}
    </div>
  );
}
