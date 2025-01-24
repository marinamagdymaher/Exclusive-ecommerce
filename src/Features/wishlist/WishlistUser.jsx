import { useCart } from "../../Components/Helper/CardContext";
import Card from "../products/Card";

export default function WishlistUser() {
  const { listWishlist } = useCart();
  console.log(listWishlist);
  return (
    <>
      {" "}
      {listWishlist.length > 0 ? (
        <div>
          <h4 className="text-3xl font-bold ">
            Wishlist ({listWishlist.length})
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {listWishlist.map((prd, i) => (
              <Card prd={prd} key={i} />
            ))}
          </div>
        </div>
      ) : (
        <p className="col-span-4 font-bold text-center text-3xl text-grey-500">
          Your Wishlist is now empty.
        </p>
      )}
    </>
  );
}
