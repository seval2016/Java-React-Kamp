import React from "react";
import CartSummary from "./CartSummary";
import { MenuMenu, MenuItem, Button, Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  return (
    <Menu inverted fixed>
      <Container>
        <MenuItem name="home" />
        <MenuItem name="messages" />

        <MenuMenu position="right">
          <CartSummary />
          <SignedOut/>
          <SignedIn/>
        </MenuMenu>
      </Container>
    </Menu>
  );
}
