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
      <Brand>
        <Logo src={ImageSources.BRAND} />
        <BrandName>CyberPunk</BrandName>
      </Brand>
      <Customer>
        <Logo src={ImageSources.PROFILE} />
        <SelectCustomer
          onChange={(event) => changeCustomer(event.target.value)}
        >
          {customerProfiles.map((customer) => (
            <option key={customer.customerID} value={customer.customerID}>
              {customer.name}
            </option>
          ))}
        </SelectCustomer>
      </Customer>
      <Tools>
        <NavbarButton onClick={showWishList}>
          <Logo src={ImageSources.WISHLIST} />
          <ItemsCount>{wishListItemsCount}</ItemsCount>
        </NavbarButton>
        <NavbarButton onClick={showCart}>
          <Logo src={ImageSources.CART} />
          <ItemsCount>{cartItemsCount}</ItemsCount>
        </NavbarButton>
      </Tools>
    </NavbarWrapper>
  );
});

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 7fr 1fr 1fr;
  grid-gap: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 100px;
  padding-bottom: 0;
  background: #fff;
`;

const Brand = styled.div`
  display: flex;
  gap: 20px;
`;

const Customer = styled.div`
  display: flex;
  gap: 10px;
`;

const Tools = styled.div`
  display: flex;
  gap: 10px;
`;

const Logo = styled.img`
  height: 40px;
  width: 40px;
`;

const BrandName = styled.strong`
  height: fit-content;
  width: fit-content;
  align-self: center;
  font-size: larger;
`;

const SelectCustomer = styled.select`
  height: fit-content;
  align-self: center;
  padding: 5px 0;
  font-size: 17px;
  border: none;
  & :-ms-expand {
    display: none;
  }
`;

const NavbarButton = styled.button`
  width: fit-content;
  background-color: inherit;
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
