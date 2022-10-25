import { useCallback, useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
import { ProductsList } from ".";
import { Navbar } from "../components";
import { CustomerNames } from "../enums";
import { customUseSelector } from "../redux/store";

export const HomeContainer = () => {
  const navigate = useNavigate();

  const { name, wishlist, cart } = customUseSelector((state) => state.customer);

  const userNames = useMemo(
    () => [
      { label: CustomerNames.CUSTOMER_A, value: CustomerNames.CUSTOMER_A },
      { label: CustomerNames.CUSTOMER_B, value: CustomerNames.CUSTOMER_B },
      { label: CustomerNames.CUSTOMER_C, value: CustomerNames.CUSTOMER_C },
    ],
    []
  );

  const showWishList = useCallback(() => navigate("wishlist"), [navigate]);
  const showCart = useCallback(() => navigate("cart"), [navigate]);

  return (
    <>
      <Navbar
        customerName={name}
        userNames={userNames}
        showWishList={showWishList}
        showCart={showCart}
        wishListItemsCount={wishlist.length}
        cartItemsCount={cart.length}
      />
      <ProductsList />
      <Outlet />
    </>
  );
};
