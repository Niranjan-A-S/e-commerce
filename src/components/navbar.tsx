import { memo, MouseEventHandler } from "react";
import styled from "styled-components";
import { SelectField } from ".";
import { ImageSources } from "../enums";
import { IOption } from "../types";

interface INavbar {
  customerName: string;
  userNames: Array<IOption>;
  showWishList: MouseEventHandler;
  showCart: MouseEventHandler;
  wishListItemsCount: number;
  cartItemsCount: number;
}

export const Navbar = memo((props: INavbar) => {
  const {
    customerName,
    userNames,
    showWishList,
    showCart,
    wishListItemsCount,
    cartItemsCount,
  } = props;

  return (
    <NavbarWrapper>
      <Logo src={ImageSources.BRAND} alt={"brand-logo"} />
      <BrandName>CyberPunk</BrandName>
      <Logo src={ImageSources.PROFILE} alt={"profile-logo"} />
      <ProfileSelect options={userNames} />
      <CustomerName>{customerName}</CustomerName>
      <NavbarButton onClick={showWishList}>
        <Logo src={ImageSources.WISHLIST} alt="wishlist-logo" />
        <ItemsCount>{wishListItemsCount}</ItemsCount>
      </NavbarButton>
      <NavbarButton onClick={showCart}>
        <Logo src={ImageSources.CART} alt="cart-logo" />
        <ItemsCount>{cartItemsCount}</ItemsCount>
      </NavbarButton>
    </NavbarWrapper>
  );
});

const NavbarWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 13fr 0.5fr 0.3fr 2fr 1fr 1fr;
  grid-auto-rows: minmax(20px, auto);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 5px 100px;
  background: #fff;
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

const CustomerName = styled.strong`
  align-self: center;
`;

const NavbarButton = styled.button`
  width: fit-content;
  background-color: inherit;
  border: none;
`;

const ProfileSelect = styled(SelectField)`
  width: 20px;
  height: 20px;
  border: none;
  align-self: center;
  background-color: inherit;
`;

const ItemsCount = styled.sup`
  background-color: red;
  color: #fff;
  font-size: 15px;
  font-weight: bolder;
  border-radius: 100%;
  padding: 3px 6px;
`;
