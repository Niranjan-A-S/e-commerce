import { useCallback, useMemo } from "react";
import { Outlet, useNavigate } from "react-router";

import { ProductsList } from ".";
import { Navbar } from "../components";
import { useAppDispatch, useAppSelector } from "../app";
import { customerChanged } from "../features/customer";

export const HomeContainer = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const {
    customer: { selectedCustomer, customerList },
  } = useAppSelector((state) => state);

  const userProfiles = useMemo(
    () => [
      { name: "Customer A", customerID: "c11" },
      { name: "Customer B", customerID: "c12" },
      { name: "Customer C", customerID: "c13" },
    ],
    []
  );

  const changeCustomer = useCallback(
    (customerID: string) => {
      dispatch(customerChanged(customerID));
    },
    [dispatch]
  );

  const showWishList = useCallback(() => navigate("wishlist"), [navigate]);
  const showCart = useCallback(() => navigate("cart"), [navigate]);

  return (
    <>
      <Navbar
        showWishList={showWishList}
        showCart={showCart}
        wishListItemsCount={customerList[selectedCustomer].wishlist.length}
        cartItemsCount={customerList[selectedCustomer].cart.length}
        customerProfiles={userProfiles}
        changeCustomer={changeCustomer}
      />
      <ProductsList />
      <Outlet />
    </>
  );
};
