import React, { useState } from "react";
import styled from "styled-components";

function Header() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>

      <Menu>
        <a href="#">Model S</a>

        <a href="#">Model 3</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Solar Roof</a>

        <a href="#">Solar Panels</a>
      </Menu>

      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Account</a>
        <a href="#" onClick={() => setIsMenuClicked((prev) => !prev)}>
          Menu
        </a>
      </RightMenu>
      {isMenuClicked && (
        <BurgerNav>
          <CloseWrap>
            <CustomClose
              src="/images/close.svg"
              onClick={() => setIsMenuClicked((prev) => !prev)}
            />
          </CloseWrap>
          <li>
            <a href="#">Model S</a>
          </li>
          <li>
            <a href="#">Model 3</a>
          </li>
          <li>
            <a href="#">Model X</a>
          </li>
          <li>
            <a href="#">Model Y</a>
          </li>
          <li>
            <a href="#">Solar Roof</a>
          </li>
          <li>
            <a href="#">Solar Panels</a>
          </li>
          <li>
            <a href="#">Existing Inventory</a>
          </li>
          <li>
            <a href="#">Used Inventory</a>
          </li>
          <li>
            <a href="#">Trade-In</a>
          </li>
          <li>
            <a href="#">Test Drive</a>
          </li>
          <li>
            <a href="#">Insurance</a>
          </li>
          <li>
            <a href="#">Powerwall</a>
          </li>
          <li>
            <a href="#">Utilities</a>
          </li>
          <li>
            <a href="#">Charging</a>
          </li>
          <li>
            <a href="#">Find Us</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
        </BurgerNav>
      )}
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  color: rgb(107, 114, 123);
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  @media (max-width: 768px) {
    a:nth-child(1),
    a:nth-child(2) {
      display: none;
    }
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  max-height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  text-align: start;

  li {
    padding: 15px 0;

    a {
      font-weight: 500;
    }
  }
`;

const CustomClose = styled.img`
  width: 20px;
  height: 20px;
  object-fit: contain;
  cursor: pointer;
`;

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
