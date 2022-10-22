import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
import styled from "styled-components";
import { ProductsList } from ".";
import { Navbar } from "../components";
import { CustomerNames } from "../enums";
import { customUseSelector } from "../redux/store";
import { ICustomer } from "../types";

export const HomeContainer = () => {
  const customer: ICustomer = customUseSelector((state) => state.customer[0]);

  const navigate = useNavigate();

  const userNames = useMemo(
    () => [
      { label: CustomerNames.CUSTOMER_A, value: CustomerNames.CUSTOMER_A },
      { label: CustomerNames.CUSTOMER_B, value: CustomerNames.CUSTOMER_B },
      { label: CustomerNames.CUSTOMER_C, value: CustomerNames.CUSTOMER_C },
    ],
    []
  );

  const showWishList = () => navigate("wishlist");
  const showCart = () => navigate("cart");

  return (
    <HomeContainerWrapper>
      <Navbar
        changeUser={() => {}}
        customerName={customer.name}
        userNames={userNames}
        showWishList={showWishList}
        showCart={showCart}
      />
      <ProductsList />
      <Outlet />
    </HomeContainerWrapper>
  );
};

const HomeContainerWrapper = styled.div``;
