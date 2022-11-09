import { MouseEventHandler, memo } from "react";
import styled from "styled-components";

import { ImageSources } from "../enums";
import { IOption } from "../types";

interface INavbar {
  customerProfiles: Array<IOption>;
  showWishList: MouseEventHandler;
  showCart: MouseEventHandler;
  wishListItemsCount: number;
  cartItemsCount: number;
  changeCustomer(customerID: string): void;
}

export const Navbar = memo((props: INavbar) => {
  const {
    showWishList,
    showCart,
    wishListItemsCount,
    cartItemsCount,
    customerProfiles,
    changeCustomer,
  } = props;

  return (
    <NavbarWrapper>
      <Logo src={ImageSources.BRAND} />
      <BrandName>CyberPunk</BrandName>
      <SelectCustomer onChange={(event) => changeCustomer(event.target.value)}>
        {customerProfiles.map((customer) => (
          <option key={customer.customerID} value={customer.customerID}>
            {customer.name}
          </option>
        ))}
      </SelectCustomer>
      <Tools onClick={showWishList}>
        <Logo src={ImageSources.WISHLIST} />
        <ItemsCount>{wishListItemsCount}</ItemsCount>
      </Tools>
      <Tools onClick={showCart}>
        <Logo src={ImageSources.CART} />
        <ItemsCount>{cartItemsCount}</ItemsCount>
      </Tools>
    </NavbarWrapper>
  );
});

const NavbarWrapper = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 100px;
  padding-bottom: 0;
  background: #fff;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const BrandName = styled.strong`
  align-self: center;
  font-size: larger;
  flex-grow: 4;
`;

const SelectCustomer = styled.select`
  -webkit-appearance: none;
  width: fit-content;
  height: fit-content;
  align-self: center;
  padding: 5px 10px;
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  border: none;
  &:hover {
    animation: popup 0.5s;
    resize: 10px;
  }
  @keyframes popup {
    0% {
      padding: 0px;
    }

    100% {
      resize: 10px;
    }
  }
`;

const Tools = styled.button`
  background-color: inherit;
  width: fit-content;
  border: none;
`;

const ItemsCount = styled.sup`
  background-color: red;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 100%;
  padding: 3px 6px;
`;
