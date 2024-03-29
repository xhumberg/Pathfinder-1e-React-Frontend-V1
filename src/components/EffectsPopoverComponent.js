import React from 'react';
import { Popover, Pane, Checkbox, Button } from "evergreen-ui";

export default class EffectsPopoverComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      loading: true
    }
  } 

  async updateSheet(effectToToggle) {
    console.log("Toggled " + effectToToggle);
    this.props.parentCallback(effectToToggle);
  }

  render() {
    return <div>
      <Popover
        bringFocusInside
        content={
          <Pane
            width={320}
            paddingX={20}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Checkbox label="Bull's Strength" onChange={() => {this.updateSheet("Bull's Strength")}}/>
          </Pane>
        }
      >
        <Button>Toggle Active Effects</Button>
      </Popover>
    </div>
  };
}