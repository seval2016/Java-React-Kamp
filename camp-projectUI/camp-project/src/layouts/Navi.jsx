import React, {useState} from "react";
import CartSummary from "./CartSummary";
import { MenuMenu, MenuItem, Button, Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  function handleSignOut(params){
    setIsAuthenticated(false)
  }

  function handleSignIn(params){
    setIsAuthenticated(true)
  }

  return (
    <Menu inverted fixed>
      <Container>
        <MenuItem name="home" />
        <MenuItem name="messages" />

        <MenuMenu position="right">
          <CartSummary />
          {
            isAuthenticated ? <SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>
          }
        </MenuMenu>
      </Container>
    </Menu>
  );
}
