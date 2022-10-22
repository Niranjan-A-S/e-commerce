import { ChangeEventHandler, MouseEventHandler } from "react";
import styled from "styled-components";
import { SelectField } from ".";
import { ImageSources } from "../enums";
import { IOption } from "../types";

interface INavbar {
  customerName: string;
  userNames: Array<IOption>;
  changeUser: ChangeEventHandler<HTMLSelectElement>;
  showWishList: MouseEventHandler;
  showCart: MouseEventHandler;
}

export const Navbar = (props: INavbar) => {
  const { customerName, userNames, changeUser, showWishList, showCart } = props;

  return (
    <NavbarWrapper>
      <Logo src={ImageSources.BRAND_LOGO} alt={"brand-logo"} />
      <BrandName>CyberPunk</BrandName>
      <Logo src={ImageSources.PROFILE_LOGO} alt={"profile-logo"} />
      <ProfileSelect options={userNames} onChange={changeUser} />
      <CustomerName>{customerName}</CustomerName>
      <NavbarButton onClick={showWishList}>
        <Logo src={ImageSources.WISHLIST_LOGO} alt="wishlist-logo" />
      </NavbarButton>
      <NavbarButton onClick={showCart}>
        <Logo src={ImageSources.CART_LOGO} alt="cart-logo" />
      </NavbarButton>
    </NavbarWrapper>
  );
};

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
