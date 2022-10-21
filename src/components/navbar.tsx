import { ChangeEventHandler, MouseEventHandler } from "react";
import styled from "styled-components";
import { SelectField } from ".";
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
      <Logo
        src={"https://cdn-icons-png.flaticon.com/512/332/332545.png"}
        alt={"brand-logo"}
      />
      <BrandName>CyberPunk</BrandName>
      <Logo
        src={"https://cdn-icons-png.flaticon.com/512/848/848043.png"}
        alt={"profile-logo"}
      />
      <ProfileSelect options={userNames} onChange={changeUser} />
      <CustomerName>{customerName}</CustomerName>
      <NavbarButton onClick={showWishList}>
        <Logo
          src={"https://cdn-icons-png.flaticon.com/512/1216/1216575.png"}
          alt=""
        />
      </NavbarButton>
      <NavbarButton onClick={showCart}>
        <Logo
          src={"https://cdn-icons-png.flaticon.com/512/649/649931.png"}
          alt="cart-logo"
        />
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
