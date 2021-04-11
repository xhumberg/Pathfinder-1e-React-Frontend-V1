import React from 'react';
import { Heading, Pane } from "evergreen-ui";

export default class LargeLabelledNumberComponent extends React.Component {

render() {

    return <Pane elevation={2} background="white" width="350px" height={200} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Heading size={100}>{this.props.label}</Heading>
    <Heading size={900}>{this.props.value}</Heading>
  </Pane>
  };
}