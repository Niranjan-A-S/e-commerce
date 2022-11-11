import { Outlet } from "react-router";
import { GlobalStyles } from "../styles";
import { Navbar, ProductsList } from "../containers";

export const HomePage = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <ProductsList />
      <Outlet />
    </>
  );
};
