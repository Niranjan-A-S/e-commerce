import { Flyout } from "../components";
import { customUseSelector } from "../redux/store";

export const WishList = () => {
  const { wishlist } = customUseSelector((state) => state.customer);

  return <Flyout name={"Wishlist"} itemsArray={wishlist} />;
};
