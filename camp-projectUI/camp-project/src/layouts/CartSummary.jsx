import React from "react";
import {
  DropdownMenu,
  Dropdown,
  MenuItem,
  Label,
  DropdownDivider,
} from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default function CartSummary() {
  return (
    <div className="basket">
      <Dropdown item text="Sepetiniz">
        <DropdownMenu vertical>
          <MenuItem name="inbox">
            <Label color="teal">1</Label>
            Acer Laptop
          </MenuItem>

          <MenuItem name="spam">
            <Label>1</Label>
            Asus Laptop
          </MenuItem>

          <MenuItem name="updates">
            <Label>1</Label>
            Dell Laptop
          </MenuItem>
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
