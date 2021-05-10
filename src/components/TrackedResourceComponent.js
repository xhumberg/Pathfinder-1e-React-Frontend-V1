import React from 'react';
import { Pane, Button } from "evergreen-ui";
import ClickForDescriptionComponent from "./ClickForDescriptionComponent"

export default class TrackedResourceComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nameOnDisplay: props.name,
          descriptionOnDisplay: props.description,
          displayDialog: false
        }
      }


    render() {
        return <Pane display="flex" alignItems="center">
            <Button height={32} onClick={() => this.props.reduce(this.props.id, this.props.type)}>-</Button>
            <ClickForDescriptionComponent name={this.props.name} description={this.props.description} value={this.props.amount}/>
            <Button height={32} onClick={() => this.props.increase(this.props.id, this.props.type)}>+</Button>
        </Pane>
    };
}