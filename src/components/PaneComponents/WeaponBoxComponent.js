import React from 'react';
import { Heading, Pane } from "evergreen-ui";

export default class WeaponBoxComponent extends React.Component {

render() {

  return <div><Pane elevation={2} background="white" width="800px" margin="auto" marginBottom={20} display="flex" justifyContent="space-between" alignItems="center" padding={20} flexDirection="column">
    <Pane display="flex" width={700} marginBottom={30}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={800}>{this.props.name}</Heading>
      </Pane>
      <Pane>
        <Heading size={200} marginRight={1}>{this.props.specials}</Heading> 
      </Pane>
    </Pane>
    <Pane display="flex" width={700}>
      <Pane flex={1} alignItems="center" display="flex">
        <Heading size={700}>{this.props.attackMods}</Heading>
      </Pane>
      <Pane>
        <Heading size={700} marginRight={1}>{this.props.damage}</Heading> 
      </Pane>
    </Pane>
  </Pane></div>
  };
}