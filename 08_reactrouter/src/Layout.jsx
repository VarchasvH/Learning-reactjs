import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";
// Outlet uses the file as a base and it will keep them same/
function Layout() {
  return (
    <>
      {/*  Header and Footer will remain the same while inside them the outlet will change */}
      <Header />

      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
