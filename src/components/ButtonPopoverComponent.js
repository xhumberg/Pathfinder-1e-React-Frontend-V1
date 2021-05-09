import React from 'react';
import { Popover, TextInput, Button, Pane } from "evergreen-ui";

export default class ButtonPopoverComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
    }
  }

  render() {
  return <Popover
    content={
      <Pane
        width={240}
        height={100}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <TextInput name="damage-amount" placeholder={this.props.placeholderText} width={180} onChange={(e) => this.setState({ amount: e.target.value })}/>
        <Button onClick={() => this.props.onSubmit(this.state.amount)}>Submit</Button>
      </Pane>
    }
  >
    <Button height={40}>{this.props.buttonText}</Button>
  </Popover>
  }
}