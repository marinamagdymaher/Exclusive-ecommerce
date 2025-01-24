import { useEffect } from "react";
import Button from "../Components/Button";
import FlashSale from "../Components/FlashSale";

import { useProducts } from "../Components/Helper/ProductContext";
import WishlistUser from "../Features/wishlist/WishlistUser";
import { useNavigate } from "react-router-dom";
import { useUser } from "../Components/Helper/UserContext";


export default function Wishlist() {
  const { products } = useProducts();
  const { setVisibility } = useUser();


  const getToken = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    // event.preventDefault();
    setVisibility(!!getToken);
  }, [getToken, setVisibility]);
  return (
    <>
      {getToken ? (
        <div className=" px-5 mt-[6rem]">
          <WishlistUser />
          <FlashSale
            products={products}
            smallTitle="Just For You"
            color="text-black"
          ></FlashSale>
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
    </>
  );
}
