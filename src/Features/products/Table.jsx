import { useEffect, useState } from "react";
import { useCart } from "../../Components/Helper/CardContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "../../Components/Button";

export default function Table() {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const [totalPrice, setTotalPrice] = useState(
    cart.reduce((acc, item) => acc + item.price * 1, 0)
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subTotal = () => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * quantities[item.id],
      0
    );
    console.log(totalPrice);
    setTotalPrice(totalPrice);
  };
  useEffect(() => {
    subTotal();
  }, [cart, quantities, subTotal]);
  
  const increment = (id) =>
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));

  const decrement = (id) =>
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1, // Prevent quantity from dropping below 1
    }));

  console.log(cart);

  return (
    <>
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
              <td className="border p-3 w-16 h-12 flex items-center justify-between">
                {quantities[prdItem.id]}
                <div className="flex flex-col gap-1 ">
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
              </td>
              <td>${prdItem.price.toFixed(2) * quantities[prdItem.id]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BottomButton />
      <div className="flex flex-col md:flex-row justify-between items-start">
        <ApplyCoupon />
        <CartTotal totalPrice={totalPrice} />
      </div>
    </>
  );
}

function BottomButton() {
  return (
    <div className="flex justify-between  w-full">
      <Button
        buttonTitle="Return To Shop"
        colorBgButton="bg-white"
        colorText="text-black"
      />
      <Button
        buttonTitle="Update Cart"
        colorBgButton="bg-white"
        colorText="text-black"
      />
    </div>
  );
}

function ApplyCoupon() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
      <input
        type="email"
        placeholder="Coupon Code"
        className="py-3 px-8 rounded border border-grey-300 flex-grow text-black"
      />
      <Button buttonTitle="Apply Coupon" />
    </div>
  );
}

function CartTotal({ totalPrice }) {
  return (
    <div className="border border-grey-300 p-5 md:w-80">
      <h5 className="font-semibold">Cart Total</h5>
      <p className="flex justify-between py-2">
        Subtotal: <span>${totalPrice}</span>
      </p>
      <p className="flex justify-between  py-2">
        Shipping: <span>free</span>
      </p>
      <p className="flex justify-between  py-2">
        Total: <span>${totalPrice}</span>
      </p>
      <Button buttonTitle="Procees to checkout" />
    </div>
  );
}
