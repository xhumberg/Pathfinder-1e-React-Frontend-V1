import React from 'react';
import { Pane, Heading, Text } from "evergreen-ui";

export default class DefenseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Pane display="flex" width="90%" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
            <Text>The following is sample text:</Text>
        </Pane>
        <Pane display="flex" width="90%" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="left">
            <Heading>Armor Class: </Heading>
            <Text padding={10}>22</Text>
            <Heading>Flat Footed: </Heading>
            <Text padding={10}>18</Text>
            <Heading>Touch: </Heading>
            <Text padding={10}>15</Text>
            <Text padding={10}>(+4 Armor, +2 Shield, +3 Dexterity, +1 Dodge, +1 Deflection, +1 Natural Armor)</Text>
        </Pane>
        <Pane display="flex" width="90%" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="left">
            <Heading>Fortitude Save: </Heading>
            <Text padding={10}>+4</Text>
            <Heading>Reflex Save: </Heading>
            <Text padding={10}>+6</Text>
            <Heading>Will Save: </Heading>
            <Text padding={10}>+6</Text>
        </Pane>
        <Pane display="flex" width="90%" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="left">
            <Heading>CMD: </Heading>
            <Text padding={10}>15</Text>
        </Pane>
    </div>
  };
}