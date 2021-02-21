import React from 'react';
import { Popover, Pane, Checkbox, Button } from "evergreen-ui";

export default class CapitalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      loading: true
    }
  } 

  render() {
    return <div>
      <Popover
        bringFocusInside
        content={
          <Pane
            width={320}
            height={320}
            paddingX={40}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Checkbox label="Haste" />
            <Checkbox label="Mage Armor" />
            <Checkbox label="Heroism" />
          </Pane>
        }
      >
        <Button>Toggle Active Effects</Button>
      </Popover>
    </div>
  };
}