import React from 'react';
import { Heading, Pane } from "evergreen-ui";

export default class SmallLabelledValueComponent extends React.Component {

render() {

    return <Pane elevation={2} background="white" width="350px" height={50} margin={6} display="flex" justifyContent="center" alignItems="center">
        <Pane flex={1} alignItems="center" display="flex">
            <Heading size={100} marginLeft={30}>{this.props.label}</Heading>
        </Pane>
        <Pane>
            <Heading size={800} marginRight={30}>{this.props.value}</Heading>
        </Pane>
    </Pane>
  };
}