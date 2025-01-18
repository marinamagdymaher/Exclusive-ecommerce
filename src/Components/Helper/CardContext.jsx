import { createContext, useContext, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../Features/user/LocalStorage2";

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext();

export const CardProvider = ({ children,products }) => {
  const users = getLocalStorage();
  const loginUser = users.find((user) => user.token !== null);
  const wishlist = loginUser?.wishlist || [];
  const userCart = loginUser?.cart || [];

  const [cart, setCart] = useState(userCart);

  const [listWishlist, setListWishlist] = useState(wishlist);

  const [msg, setMsg] = useState("");

 
  const deleteProduct = (id) => {
    const newList = listWishlist.filter((prd) => prd.id !== id);
    console.log(newList)
    setListWishlist(newList);
    const updatedWishlist = {
      ...loginUser,
      wishlist: newList,
    };
    const updatedUsers = users.map((user) =>
      user.token === loginUser.token ? updatedWishlist : user
    );
    setLocalStorage(updatedUsers);
  };

  const handleAddToCart = (productId) => {
    console.log(productId)
    const product = products.find((p) => p.id === productId);
    console.log(product)
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];

      const updatedUser = {
        ...loginUser,
        cart: updatedCart,
      };
      const updatedUsers = users.map((user) =>
        user.token === loginUser.token ? updatedUser : user
      );

      setLocalStorage(updatedUsers);

      console.log(`Product with ID ${productId} added to cart.`);
      console.log(updatedCart);

      return updatedCart; // Return the new cart
    });
  };

  const handleAddToWishlist = (prdId) => {
    console.log(prdId);
    if (!loginUser) {
      setMsg("Please log in to add items to your wishlist.");
      setTimeout(() => setMsg(""), 1000);
      return;
    }

    if (listWishlist.some((item) => item.id === prdId)) {
      setMsg("Product is already in your wishlist.");
      setTimeout(() => setMsg(""), 1000);
      return;
    }
    const product = products.find((p) => p.id === prdId);

    const updatedWishlist = [...listWishlist, product ];
    setListWishlist(updatedWishlist)

    const updatedUser = {
      ...loginUser,
      wishlist: [...listWishlist, updatedWishlist],
    };
    const updatedUsers = users.map((user) =>
      user.token === loginUser.token ? updatedUser : user
    );

    setLocalStorage(updatedUsers);
    setMsg("Add To Wishlist Successfully");

    setTimeout(() => setMsg(""), 1000);
  };

  return (
    <CardContext.Provider
      value={{
        cart,
        handleAddToCart,
        deleteProduct,
        listWishlist,
        handleAddToWishlist,
        msg,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CardContext);
