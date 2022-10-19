import styled from "styled-components";
import { SelectField } from "../components";

export const Navbar = () => {
  const options = [
    { label: "Customer A", value: "customerA" },
    { label: "Customer B", value: "customerB" },
    { label: "Customer C", value: "customerC" },
  ];

  return (
    <NavbarWrapper>
      <Logo
        className="rotate"
        src={"https://cdn-icons-png.flaticon.com/512/6844/6844481.png"}
        alt={"brand-logo"}
      />
      <BrandName>CyberPunk</BrandName>
      <Logo
        src={"https://cdn-icons-png.flaticon.com/512/848/848043.png"}
        alt={"profile-logo"}
      />
      <ProfileSelect options={options} />
      <CustomerName>{options[0].label}</CustomerName>
      <StyledButton>
        <Logo
          src={"https://cdn-icons-png.flaticon.com/512/1216/1216575.png"}
          alt=""
        />
      </StyledButton>
      <StyledButton>
        <Logo
          src={"https://cdn-icons-png.flaticon.com/512/649/649931.png"}
          alt="cart-logo"
        />
      </StyledButton>
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
  height: 35px;
  width: 35px;
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

const StyledButton = styled.button`
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
