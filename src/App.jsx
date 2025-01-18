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
import { useEffect, useState } from "react";
import Wishlist from "./Pages/Wishlist";
import Logout from "./Features/user/Logout";
import AllProductCategory from "./Components/Category/AllProductCategory";
import AllBestSellingPrd from "./Features/products/AllBestSellingPrd";
import { CardProvider } from "./Components/Helper/CardContext";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products`);
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        const transformedProducts = data.products.map((prod) => ({
          id: prod.id,
          title: prod.title,
          image: prod.images[0],
          price: prod.price,
          category: prod.category,
          rating: prod.rating,
        }));
        setProducts(transformedProducts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
          element: <Home products={products} />,
        },
        {
          path: "contacts",
          element: <Contact />,
        },
        {
          path: "cart",
          element: <Cart products={products} />,
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
          path: "products/:productId",
          element: <SingleProduct products={products} />,
        },
        {
          path: "category/:category",
          element: <AllProductCategory products={products} />,
        },
        {
          path: "products",
          element: <ViewAllProducts products={products} />,
        },
        {
          path: "AllBestSellingPrd",
          element: <AllBestSellingPrd products={products} />,
        },
        {
          path: "wishlist",
          element: <Wishlist products={products} />,
        },
      ],
    },
  ]);

  return (
    <>
        <CardProvider products={products}>
          <RouterProvider router={router} />
        </CardProvider>
    </>
  );
}

export default App;
