import React, { useState } from "react";
import CartSummary from "./CartSummary";
import { MenuMenu, MenuItem, Menu, Container } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navi() {
  const {cartItems} = useSelector(state => state.cart)

  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate(); // useNavigate belirtilen sayfaya geri dönülmesi için kullanılır

  function handleSignOut(params) {
    setIsAuthenticated(false);
    navigate("/");
  }

  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem name="Anasayfa"  onClick={() => navigate("/")}/>
        <MenuItem name="Hakkımızda"  onClick={() => navigate("/abouts")}/>
        <MenuItem name="ürünler"  onClick={() => navigate("/products")}/>

        <MenuMenu position="right">
          {cartItems.length>0&&<CartSummary />}
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} />
          ) : (
            <SignedOut signIn={handleSignIn} />
          )}
        </MenuMenu>
      </Container>
    </Menu>
  );
}
