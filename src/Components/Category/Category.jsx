import { useNavigate } from "react-router-dom";
import "./Category.css";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

export default function Category({ products }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [
      ...new Set(products.map((product) => product.category)),
    ];
    setCategories(uniqueCategories);

    (error) => console.error("Error fetching data:", error);
  }, [products]);

  const categoryIcons = {
    beauty: "fas fa-female",
    fragrances: "fas fa-gem",
    furniture: "fas fa-laptop",
    groceries: "fas fa-user-tie",
  };

  return (
    <div className="my-8">
      <div className="text-red-200 font-semibold flex gap-5 py-5">
        <span className="border-8"></span>
        <h3>Categories</h3>
      </div>
      <h4 className="text-4xl font-bold mb-6">Browse By Category</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <CardCategory
              key={i}
              icons={categoryIcons[category] || "fas fa-question"}
              category={category}
            />
          ))
        ) : (
          <p className="col-span-4 text-center text-grey-500">
            No categories available.
          </p>
        )}
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function CardCategory({ icons, category }) {
  const navigate = useNavigate();

  const handleCategory = () => {
    navigate(`/category/${category}`);
  };

  return (
    <div
      onClick={() => handleCategory(category)}
      className="text-center bg-white border border-grey-200 cursor-pointer rounded-lg duration-300"
    >
      <div className="p-4">
        <i className={`${icons} text-3xl mb-3`}></i>
        {/* <FontAwesomeIcon icon={icons} className="text-3xl mb-3" /> */}
        <h2 className="text-lg capitalize font-bold">{category}</h2>
      </div>
    </div>
  );
}
