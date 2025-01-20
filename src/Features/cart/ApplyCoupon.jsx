import Button from "../../Components/Button";

export default function ApplyCoupon() {
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
