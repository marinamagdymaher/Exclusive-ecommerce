import { NavLink } from "react-router-dom";
import Table from "../Features/cart/Table";
import BottomButton from "../Features/cart/BottomButton";
import ApplyCoupon from "../Features/cart/ApplyCoupon";
import CartTotal from "../Features/cart/CartTotal";

export default function Cart() {
  return (
    <div className="px-5 my-[5rem]">
      <LinkContact />
      <Table />
      <BottomButton />
      <div className="flex flex-col md:flex-row justify-between items-start">
        <ApplyCoupon />
        <CartTotal />
      </div>
    </div>
  );
}

function LinkContact() {
  return (
    <ul className="flex p-5 mt-8">
      <li>
        {" "}
        <NavLink to="/" className="font-bold text-grey-500 ">
          Home
        </NavLink>
      </li>{" "}
      <li>
        <pre> / </pre>
      </li>
      <li>
        {" "}
        <NavLink to="/cart" className="font-bold ">
          Cart
        </NavLink>
      </li>
    </ul>
  );
}
