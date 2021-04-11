import React from 'react';
import { Heading, Pane } from "evergreen-ui";

export default class LabelledNumberComponent extends React.Component {

render() {

    return <Pane elevation={2} background="white" width="350px" height={100} margin={12} display="flex" justifyContent="center" alignItems="center">
        <Pane flex={1} alignItems="center" display="flex">
            <Heading size={100} marginLeft={30}>{this.props.label}</Heading>
        </Pane>
        <Pane>
            <Heading size={800} marginRight={30}>{this.props.value}</Heading>
        </Pane>
    </Pane>
  };
}