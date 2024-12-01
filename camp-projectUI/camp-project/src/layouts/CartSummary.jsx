import React from "react";
import {
  DropdownMenu,
  Dropdown,
  MenuItem,
  Input,
  Label,
} from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div className="basket">
      <Dropdown item text="Sepet">
        <DropdownMenu vertical>
          <MenuItem name="inbox">
            <Label color="teal">1</Label>
            Inbox
          </MenuItem>

          <MenuItem name="spam">
            <Label>51</Label>
            Spam
          </MenuItem>

          <MenuItem name="updates">
            <Label>1</Label>
            Updates
          </MenuItem>
          <MenuItem>
            <Input icon="search" placeholder="Search mail..." />
          </MenuItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
