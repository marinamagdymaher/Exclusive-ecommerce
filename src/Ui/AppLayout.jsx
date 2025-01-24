import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import { useProducts } from "../Components/Helper/ProductContext";
import { useEffect } from "react";
// import { useUser } from "../Components/Helper/UserContext";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  const { loading, error } = useProducts();
  const getToken = localStorage.getItem("token");
  // const { setVisibility } = useUser();
  useEffect(() => {
    // event.preventDefault();
  }, [getToken]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <div>
      <Header />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
