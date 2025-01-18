import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";

// eslint-disable-next-line react/prop-types
export default function AppLayout({ children }) {
  return (
    <div>
      <Header />
      <main>{children ?? <Outlet />}</main>
      <Footer />
    </div>
  );
}
