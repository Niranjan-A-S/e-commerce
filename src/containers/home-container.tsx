import { Navbar, ProductsList } from ".";
import { Flyout } from "../components";

export const HomeContainer = () => {
  return (
    <>
      <Navbar />
      <ProductsList />
      <Flyout name={"Wishlist"} />
    </>
  );
};
