import { createContext, useContext, useEffect, useState } from "react";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../Features/user/LocalStorage2";
import { useProducts } from "./ProductContext";

// eslint-disable-next-line react-refresh/only-export-components
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const { products } = useProducts();
  const users = getLocalStorage();
  const loginUser = users.find((user) => user.token !== null);
  const wishlist = loginUser?.wishlist || [];
  const userCart = loginUser?.cart || [];

  const [cart, setCart] = useState(userCart);

  const [listWishlist, setListWishlist] = useState(wishlist);

  const [msg, setMsg] = useState("");

  const deleteProduct = (id) => {
    const newList = listWishlist.filter((prd) => prd.id !== id);
    console.log(newList);
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

    const updatedWishlist = [...listWishlist, product];
    setListWishlist(updatedWishlist);

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

  const handleAddToCart = (productId) => {
    // console.log(productId);

    const product = products.find((p) => p.id === productId);

    if (!product) {
      alert("Product not found!");
      return;
    }
    // console.log("cart",cart);
    
    const prdExist = userCart.some((cartItem) => cartItem.id === productId);
    if (prdExist) {
      alert("The product is already exist in the cart");
      return;
    }
    // console.log(product);
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

  const clearCart = () => {
    let result = confirm("Are you sure you want to delete all cart?");
    if (result) {
      //Logic to delete the item
      setCart([]);
      console.log("userCart",userCart);
      // const deleteAllCart = {
      //   ...loginUser,
      //   cart: [],
      // };
      // const updatedCart = users.map((user) =>
      //   user.token === loginUser.token ? deleteAllCart : user
      // );
      // setLocalStorage(updatedCart);
      console.log(cart);
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      console.log("The cart is now empty.");
    }
  }, [cart]);

  return (
    <CardContext.Provider
      value={{
        cart,
        handleAddToCart,
        deleteProduct,
        listWishlist,
        handleAddToWishlist,
        clearCart,
        msg,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CardContext);
