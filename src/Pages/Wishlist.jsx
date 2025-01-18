import Card from "../Features/products/Card";
import FlashSale from "../Components/FlashSale";
import { useCart } from "../Components/Helper/CardContext";

export default function Wishlist({ products }) {
  const { listWishlist } = useCart();
  return (
    <div className=" px-5 mt-[6rem]">
      <h4 className="text-3xl font-bold ">Wishlist ({listWishlist.length})</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
        {listWishlist.map((prd, i) => (
          <Card prd={prd} key={i}  />
        ))}
      </div>
      <FlashSale smallTitle="Just For You" color="text-black"></FlashSale>
    </div>
  );
}