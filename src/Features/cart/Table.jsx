import { useCart } from "../../Components/Helper/CardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTotalPrice } from "../../Components/Helper/TotalPriceContext";

export default function Table() {
  const { increment, decrement, quantities } = useTotalPrice();
  const { cart } = useCart();
  return (
    <>
      {cart.length > 0 ? (
        <table className="w-full text-left">
          <thead className="border border-grey-300">
            <tr>
              <th className="py-5 px-3 sm:px-6">Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((prdItem, i) => (
              <tr key={i} className="border border-grey-300">
                <td className="py-5 px-3 sm:px-6  flex flex-col md:flex-row items-start md:items-center gap-3">
                  <img
                    src={prdItem.image}
                    alt={prdItem.image}
                    className="w-16 h-16 sm:w-24 md:h-24 object-contain mb-2"
                  />
                  <span className="md:truncate">{prdItem.title}</span>
                </td>
                <td>${prdItem.price.toFixed(2)}</td>
                <td>
                  <span className="flex w-16 border justify-around items-center">
                    {quantities[prdItem.id]}
                    <div className="flex flex-col gap-1  py-2">
                      <FontAwesomeIcon
                        icon={faChevronUp}
                        onClick={() => increment(prdItem.id)}
                        className="text-gray-500 hover:text-black cursor-pointer"
                      />{" "}
                      <FontAwesomeIcon
                        onClick={() => decrement(prdItem.id)}
                        icon={faChevronDown}
                        className="text-gray-500 hover:text-black cursor-pointer"
                      />
                    </div>
                  </span>
                </td>
                <td>${prdItem.price.toFixed(2) * quantities[prdItem.id]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="col-span-4 font-bold text-center text-3xl text-grey-500">
          Your cart is now empty.
        </p>
      )}
    </>
  );
}
