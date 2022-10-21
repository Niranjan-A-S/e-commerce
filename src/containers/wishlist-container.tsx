import { Flyout } from "../components";
import { customUseSelector } from "../redux/store";

export const WishList = () => {
  const { cart } = customUseSelector((state) => state.customer[0]);

  return <Flyout name={"Wishlist"} itemsArray={cart} />;
};
