import React from "react";
import {
  DropdownMenu,
  Dropdown,
  MenuItem,
  Label,
  DropdownDivider,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartSummary() {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="basket">
      <Dropdown item text="Sepetiniz">
        <DropdownMenu vertical>
          {cartItems.map((cartItem) => (
            <MenuItem name="inbox">
              <Label color="teal">{cartItem.quantity}</Label>
              {cartItem.product.productName}
            </MenuItem>
          ))}
          <DropdownDivider />
          <MenuItem name="sepeteGit" as={NavLink} to="/cart">
            <Label className="py-2 pe-0" icon="shopping basket"></Label>
            Sepete Git
          </MenuItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
