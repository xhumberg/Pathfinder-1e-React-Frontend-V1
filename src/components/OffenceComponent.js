import React from 'react';
import { Pane, Heading, Text } from "evergreen-ui";

export default class OffenceComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Pane display="flex" width="90%" background="redTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
            <Text>The following is sample text:</Text>
        </Pane>
        <Pane display="flex" width="90%" background="redTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="left">
            <Heading>Heavy Crossbow</Heading>
            <Text padding={10}>+5 (1d10 | 19-20x2)</Text>
        </Pane>
        <Pane display="flex" width="90%" background="redTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="left">
            <Heading>BAB: +2; CMB +0</Heading>
        </Pane>
    </div>
  };
}