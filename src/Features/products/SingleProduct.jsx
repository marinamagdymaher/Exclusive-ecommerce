import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightLeft,
  faTruckFast,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../../Components/Helper/CardContext";
import { useProducts } from "../../Components/Helper/ProductContext";
import Button from "../../Components/Button";

// eslint-disable-next-line react/prop-types
export default function SingleProduct() {
  const { products } = useProducts();
  const { productId } = useParams();
  const [counter, setCounter] = useState(1);
  const { handleAddToWishlist, msg } = useCart();

  // eslint-disable-next-line react/prop-types
  const product = products.find((p) => p.id === Number(productId));

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => (prev > 1 ? prev - 1 : prev));

  useEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-10 my-9 flex flex-col md:flex-row justify-around gap-5">
      <div className="flex flex-row gap-6 py-5 md:py-0">
        <div className="flex flex-col gap-4 h-96">
          <ImgList product={product} />
        </div>
        <div>
          <img
            src={product.image}
            alt={product.title}
            className="md:w-96 h-96 object-contain bg-secondary p-5 rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="flex  flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
        <p className="text-gray-700">{product.description}</p>
        {msg && <p className="text-green-500">{msg}</p>}
        <hr />
        <div className="flex flex-col xs:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <button
              onClick={decrement}
              className="border px-3 py-2 font-semibold"
            >
              −
            </button>
            <p className="border text-center w-24 px-6 py-2">{counter}</p>
            <button
              onClick={increment}
              className="border px-3 py-2 font-semibold bg-red-200 text-white"
            >
              +
            </button>
          </div>
          <div className="flex items-center">
            <Button buttonTitle="Buy Now" />
            <Link>
              <FontAwesomeIcon
                onClick={() => handleAddToWishlist(product.id)}
                icon={faHeart}
                size="lg"
                className="border rounded p-3 text-gray-500"
              />
            </Link>
          </div>
        </div>
        <div className="border rounded-lg flex items-center gap-5 p-6">
          <FontAwesomeIcon icon={faTruckFast} size="2x" />
          <div>
            <h5 className="font-semibold">Free Delivery</h5>
            <p className="text-sm">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="border rounded-lg flex items-center gap-5 p-6">
          <FontAwesomeIcon icon={faRightLeft} size="2x" />
          <div>
            <h5 className="font-semibold">Return Delivery</h5>
            <p className="text-sm">Free 30 Days Delivery Returns. Details</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ImgList({ product }) {
  const elements = [];
  for (let i = 0; i < 4; i++) {
    elements.push(
      <img
        key={i}
        src={product.image}
        alt={`Product view ${i + 1}`}
        className="w-48 h-full md:w-32 bg-secondary p-2 rounded-lg shadow-md cursor-pointer"
      />
    );
  }
  return elements;
}
