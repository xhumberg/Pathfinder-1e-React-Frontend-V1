import React from 'react';
import { Pane, Heading } from "evergreen-ui";
import ButtonPopoverComponent from './ButtonPopoverComponent';

export default class HPComponent extends React.Component {



  render() {
    var percentRemaining = this.props.currentHP/this.props.maxHP;
    var color = "green";
    
    if (percentRemaining <= 0.7 && percentRemaining > 0.4) {
        color = "yellow";
    } else if (percentRemaining <= 0.4) {
        color = "red";
    }

    return <Pane background="greenTint" width={950} margin="auto">
    <Heading size={900}>Hit Points</Heading>
    <Heading size={500}>{this.props.currentHP}/{this.props.maxHP}</Heading>
    <Pane display="flex" width={this.props.width} background="black" borderRadius={10} padding={3} margin="auto" justifyContent="start">
      <Pane display="flex" width={percentRemaining*this.props.width} background={color} borderRadius={10} justifyContent = "center" height={20}>
      </Pane>
    </Pane>
    <Pane display="flex" marginTop={5}>
      <Pane flex={1} alignItems="center" display="flex" marginLeft={75}>
        <ButtonPopoverComponent buttonText="Damage" placeholderText="Damage amount..." onSubmit={this.props.damage}/>
      </Pane>
      <Pane marginRight={75}>
        <ButtonPopoverComponent buttonText="Heal" placeholderText="Healing amount..." onSubmit={this.props.heal}/>
      </Pane>
    </Pane>
  </Pane>
  };
}