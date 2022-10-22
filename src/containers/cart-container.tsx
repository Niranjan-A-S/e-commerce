import { Flyout } from "../components";
import { customUseSelector } from "../redux/store";

export const Cart = () => {
  const { cart } = customUseSelector((state) => state.customer);

  return <Flyout name={"Cart"} itemsArray={cart} />;
};
