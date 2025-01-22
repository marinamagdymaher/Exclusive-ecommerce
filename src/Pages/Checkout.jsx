import Button from "../Components/Button";
import ApplyCoupon from "../Features/cart/ApplyCoupon";
import FormBilling from "../Features/checkout/FormBilling";
import PurchasedProducts from "../Features/checkout/PurchasedProduct";
import TotalCheckout from "../Features/checkout/TotalCheckout";

export default function Checkout() {
  return (
    <div className="p-5">
      <LinkContact />
      <div className="flex flex-col md:flex-row justify-between">
        <FormBilling />
        <div className="space-y-6 md:w-1/3">
          <PurchasedProducts />
          <TotalCheckout />
          <ApplyCoupon />
          <Button buttonTitle="Place Order" />
        </div>
      </div>
    </div>
  );
}

function LinkContact() {
  return (
    <>
      <pre className="py-9 mt-9 font-bold text-grey-400">
        {" "}
        Account / My Account / Product / View Cart{" "}
        <span className="text-black">/ CheckOut</span>
      </pre>
      <pre></pre>
    </>
  );
}
