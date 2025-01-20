
import Button from "../../Components/Button";
import { useCart } from "../../Components/Helper/CardContext";

export default function BottomButton() {
  const { clearCart } = useCart();
  return (
    <div className="flex justify-between  w-full">
      <Button
        handleButton={() => clearCart()}
        buttonTitle="Return To Shop"
        colorBgButton="bg-white"
        colorText="text-grey-700"
      />
      <Button handleButton={() => console.log("object")}
        buttonTitle="Update Cart"
        colorBgButton="bg-white"
        colorText="text-grey-700"
      />
    </div>
  );
}
