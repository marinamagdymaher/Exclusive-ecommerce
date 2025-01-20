import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../../Components/Helper/CardContext";

// eslint-disable-next-line react/prop-types
export default function Card({ prd, icon = faTrash, secondIcon }) {
  const { handleAddToCart, deleteProduct } = useCart();

  return (
    <div className="rounded my-9 group relative">
      <div className="relative ">
        <img
          src={prd.image}
          alt={prd.title}
          className="w-full h-64 object-contain mb-2 bg-secondary"
        />
        <FontAwesomeIcon
          onClick={() => deleteProduct(prd.id)}
          icon={icon}
          className="absolute top-3 right-3 bg-white p-1 rounded-full"
        />
        {secondIcon && (
          <FontAwesomeIcon
            icon={secondIcon || null}
            className="absolute top-[3rem] right-3 bg-white p-1 rounded-full"
          />
        )}

        <div
          onClick={() => handleAddToCart(prd.id)}
          className="bg-black w-full h-10 text-white flex justify-center items-center gap-4 absolute bottom-0 opacity-0  group-hover:opacity-100 transition-opacity"
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            size="lg"
            className="cursor-pointer"
          />
          <h4>Add to Cart</h4>
        </div>
        {prd.salePercent && (
          <div className="bg-red-200 w-16 h-8 rounded absolute top-4 left-4 text-center text-white">
            {prd.salePercent} %
          </div>
        )}
      </div>
      <h2 className="text-lg font-semibold truncate">{prd.title}</h2>
      <p className="flex gap-3">
      {prd.salePercent && prd.price && (
        <p>${(prd.price - (prd.price * prd.salePercent) / 100).toFixed(2)}</p>
      )}
      {prd.price && (
        <span
          className={`pr-5 text-red-100 ${prd.salePercent && "line-through"}`}
        >
          ${prd.price.toFixed(2)}
        </span>
      )}</p>
    </div>
  );
}
