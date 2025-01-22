import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { useTotalPrice } from "../../Components/Helper/TotalPriceContext";

export default function CartTotal() {
  const { totalPrice } = useTotalPrice();
  const navigate = useNavigate();
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
      <Button
        buttonTitle="Procees to checkout"
        handleButton={() => {
          navigate("/checkout");
        }}
      />
    </div>
  );
}
