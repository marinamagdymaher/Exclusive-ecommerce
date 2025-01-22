import { useTotalPrice } from "../../Components/Helper/TotalPriceContext";

export default function TotalCheckout() {
  const { totalPrice } = useTotalPrice();
  return (
    <div className="space-y-4 p-5">
      <div className="space-y-2">
        <p className="flex justify-between border-b text-lg font-medium">
          Subtotal: <span>${totalPrice}</span>
        </p>
        <p className="flex justify-between border-b text-lg font-medium">
          Shipping: <span>Free</span>
        </p>
        <p className="flex justify-between text-lg font-bold pt-2">
          Total: <span>${totalPrice}</span>
        </p>
      </div>
      <div className="space-y-2">
        <div className="flex items-center">
          <input id="bank" type="radio" name="payment" className="mr-2" />
          <label htmlFor="bank" className="text-gray-700">
            Bank Transfer
          </label>
        </div>
        <div className="flex items-center">
          <input id="cash" type="radio" name="payment" className="mr-2" />
          <label htmlFor="cash" className="text-gray-700">
            Cash on Delivery
          </label>
        </div>
      </div>
    </div>
  );
}
