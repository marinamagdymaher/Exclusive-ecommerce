import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../Features/products/Card";

function AllProductCategory({ products }) {
  const { category } = useParams();

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  const selectedCat = products.filter((cat) => cat.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5">
      {selectedCat.map((cat, idx) => (
        // to={`/products/${prd.id}`
        <Link key={idx} to={`/products/${cat.id}`}>
          <Card prd={cat} />
        </Link>
      ))}
    </div>
  );
}

export default AllProductCategory;
