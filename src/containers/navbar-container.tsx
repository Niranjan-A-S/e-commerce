import { memo, useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  BRAND,
  WISHLIST_RED,
  WISHLIST,
  CART_FILLED,
  CART,
  CUSTOMER_A,
  CUSTOMER_B,
  CUSTOMER_C,
} from "../enums";

import { customerChanged } from "../features/customer";
import { useAppSelector } from "../redux";

export const Navbar = memo((props) => {
  const dispatch = useDispatch();

  const { customerList, selectedCustomer } = useAppSelector(
    (state) => state.customer
  );

  const { cart, wishlist } = customerList[selectedCustomer];

  const customerProfiles = useMemo(
    () => [
      { name: CUSTOMER_A, customerID: "c11" },
      { name: CUSTOMER_B, customerID: "c12" },
      { name: CUSTOMER_C, customerID: "c13" },
    ],
    []
  );

  const changeCustomer = useCallback(
    (customerID: string) => {
      dispatch(customerChanged(customerID));
    },
    [dispatch]
  );

  return (
    <NavbarWrapper>
      <Logo src={BRAND} />
      <SelectCustomer
        onChange={({ target: { value } }) => changeCustomer(value)}
      >
        {customerProfiles.map(({ customerID, name }) => (
          <option key={customerID} value={customerID}>
            {name}
          </option>
        ))}
      </SelectCustomer>
      <StyledNavLink to={"wishlist"}>
        <Logo src={wishlist.length ? WISHLIST_RED : WISHLIST} />
        <ItemsCount>{wishlist.length}</ItemsCount>
      </StyledNavLink>
      <StyledNavLink to={"cart"}>
        <Logo src={cart.length ? CART_FILLED : CART} />
        <ItemsCount>{cart.length}</ItemsCount>
      </StyledNavLink>
    </NavbarWrapper>
  );
});

const NavbarWrapper = styled.nav`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 100px;
  padding-bottom: 0;
  position: relative;
  height: 50px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const SelectCustomer = styled.select`
  -webkit-appearance: none;
  text-transform: uppercase;
  font-size: 20px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  border: none;
  position: absolute;
  margin: 0;
  top: 10px;
  right: 250px;
  &:focus {
    outline: none;
    border: none;
  }
`;

const ItemsCount = styled.sup`
  font-size: 25px;
  text-align: center;
  padding: 0.5px 5px;
  font-weight: 800;
  color: tomato;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  float: right;
`;
