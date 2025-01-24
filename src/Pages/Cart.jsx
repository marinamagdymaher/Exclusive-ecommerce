import { NavLink, useNavigate } from "react-router-dom";
import Table from "../Features/cart/Table";
import BottomButton from "../Features/cart/BottomButton";
import ApplyCoupon from "../Features/cart/ApplyCoupon";
import CartTotal from "../Features/cart/CartTotal";
import { useEffect } from "react";
import { useUser } from "../Components/Helper/UserContext";
import Button from "../Components/Button";

export default function Cart() {
  const { setVisibility } = useUser();
  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    // event.preventDefault();
    setVisibility(!!getToken);
  }, [getToken, setVisibility]);

  return (
    <div>
      {getToken ? (
        <div className="p-2 xs:px-5 my-[5rem]">
          <LinkContact />
          <Table />
          <BottomButton />
          <div className="flex flex-col md:flex-row justify-between items-start">
            <ApplyCoupon />
            <CartTotal />
          </div>
        </div>
      ) : (
        <div className="my-[8rem] flex flex-col items-center justify-center bg-gray-100">
          <p className="text-2xl font-bold text-grey-700 mb-4">
            Sorry, you are not loggedIn.
          </p>
          <Button
            buttonTitle="Go to Login"
            handleButton={() => navigate("/login")}
          />
        </div>
      )}
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
