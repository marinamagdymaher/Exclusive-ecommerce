import { createContext, useContext, useEffect, useState } from "react";
import { useCart } from "./CardContext";

export const TotalPriceContext = createContext();

export const TotalPriceProvider = ({ children }) => {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState(
    cart?.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const [totalPrice, setTotalPrice] = useState(
    cart?.reduce((acc, item) => acc + item.price * 1, 0)
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const subTotal = () => {
    const totalPrice = cart?.reduce(
      (acc, item) => acc + item.price * quantities[item.id],
      0
    );
    setTotalPrice(totalPrice.toFixed(2));
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

  return (
    <TotalPriceContext.Provider
      value={{ increment, decrement, quantities, totalPrice }}
    >
      {children}
    </TotalPriceContext.Provider>
  );
};

export const useTotalPrice = () => useContext(TotalPriceContext);
