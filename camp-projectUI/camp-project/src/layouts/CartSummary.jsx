import React from "react";
import {
  DropdownMenu,
  Dropdown,
  MenuItem,
  Input,
  Label,
  DropdownDivider,
  DropdownItem,
} from "semantic-ui-react";

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
            <Label>51</Label>
            Asus Laptop
          </MenuItem>

          <MenuItem name="updates">
            <Label>1</Label>
            Dell Laptop
          </MenuItem>
          <DropdownDivider/>
          <MenuItem name="sepeteGit" >
          <Label icon='shopping basket'></Label>
            Sepete Git
          </MenuItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
