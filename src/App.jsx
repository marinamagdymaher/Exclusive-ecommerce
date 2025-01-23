import "./App.css";
import Home from "./Ui/Home";
import ErrorPage from "./Ui/ErrorPage";
import Contact from "./Pages/Contacts";
import Cart from "./Pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Ui/AppLayout";
import Register from "./Features/user/Register";
import Login from "./Features/user/Login";
import About from "./Pages/About";
import SingleProduct from "./Features/products/SingleProduct";
import ViewAllProducts from "./Features/products/ViewAllProducts";
import Wishlist from "./Pages/Wishlist";
import Logout from "./Features/user/Logout";
import AllProductCategory from "./Components/Category/AllProductCategory";
import AllBestSellingPrd from "./Features/products/AllBestSellingPrd";
import { CardProvider } from "./Components/Helper/CardContext";
import { TotalPriceProvider } from "./Components/Helper/TotalPriceContext";
import { ProductProvider } from "./Components/Helper/ProductContext";
import Checkout from "./Pages/Checkout";
import Profile from "./Pages/Profile";
import { UserProvider } from "./Components/Helper/UserContext";


function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: (
        <AppLayout>
          <ErrorPage />
        </AppLayout>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "contacts",
          element: <Contact />,
        },
        {
          path: "checkout",
          element: (
            <TotalPriceProvider>
              <Checkout />
            </TotalPriceProvider>
          ),
        },
        {
          path: "cart",
          element: (
            <TotalPriceProvider>
              <Cart />
            </TotalPriceProvider>
          ),
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "logout",
          element: <Logout />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "profile",
          element: <Profile />,
        },
        {
          path: "products/:productId",
          element: (
            <TotalPriceProvider>
              <SingleProduct />
            </TotalPriceProvider>
          ),
        },
        {
          path: "category/:category",
          element: <AllProductCategory />,
        },
        {
          path: "products",
          element: <ViewAllProducts />,
        },
        {
          path: "AllBestSellingPrd",
          element: <AllBestSellingPrd />,
        },
        {
          path: "wishlist",
          element: <Wishlist />,
        },
      ],
    },
  ]);

  return (
    <ProductProvider>
      <CardProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </CardProvider>
    </ProductProvider>
  );
}

export default App;
