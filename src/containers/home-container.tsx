import { ChangeEvent, useCallback, useMemo } from "react";
import { Navbar, ProductsList } from ".";
import { Flyout } from "../components";
import { customUseSelector } from "../redux/store";
import { ICustomer } from "../types";

export const HomeContainer = () => {
  const customer: ICustomer = customUseSelector((state) => state.customer[0]);

  const userNames = useMemo(
    () => [
      { label: "Roman Reigns", value: "Roman Reigns" },
      { label: "Dean Ambros", value: "Dean Ambros" },
      { label: "Seth Rollins", value: "Seth Rollins" },
    ],
    []
  );

  const changeUser = useCallback((event: ChangeEvent<HTMLSelectElement>) => {},
  []);

  return (
    <>
      <Navbar
        changeUser={changeUser}
        customerName={customer.name}
        userNames={userNames}
      />
      <ProductsList />
      <Flyout name={"Wishlist"} />
    </>
  );
};
