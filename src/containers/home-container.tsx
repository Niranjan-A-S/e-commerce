import { Outlet } from "react-router";
import { GlobalStyles } from "../styles";
import { Navbar, ProductsList, Toolbar } from ".";

export const HomeContainer = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Toolbar />
      <ProductsList />
      <Outlet />
    </>
  );
};
