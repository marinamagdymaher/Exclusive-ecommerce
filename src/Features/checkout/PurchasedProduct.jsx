import { useCart } from "../../Components/Helper/CardContext";

export default function PurchasedProducts() {
  const { cart } = useCart();
  return (
    <div className="space-y-4 p-5 ">
      {cart.length > 0 ? (
        cart.map((item, i) => (
          <div key={i} className="flex items-center justify-between gap-4 pb-4">
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <p className="font-medium">{item.title}</p>
            </div>
            <div className="text-lg font-semibold">
              {item.salePercent ? (
                <p>
                  $
                  {(item.price - (item.price * item.salePercent) / 100).toFixed(
                    2
                  )}
                </p>
              ) : (
                <p>${item.price.toFixed(2)}</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
