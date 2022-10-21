import { useMemo } from "react";
import { Outlet, useNavigate } from "react-router";
import styled from "styled-components";
import { ProductsList } from ".";
import { Navbar } from "../components";
import { customUseSelector } from "../redux/store";
import { ICustomer } from "../types";

export const HomeContainer = () => {
  const customer: ICustomer = customUseSelector((state) => state.customer[0]);

  const navigate = useNavigate();

  const userNames = useMemo(
    () => [
      { label: "Roman Reigns", value: "Roman Reigns" },
      { label: "Dean Ambros", value: "Dean Ambros" },
      { label: "Seth Rollins", value: "Seth Rollins" },
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
