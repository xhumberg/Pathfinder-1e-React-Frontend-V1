import React from 'react';
import { Pane, Heading, Text } from "evergreen-ui";
import WeaponComponent from "./WeaponComponent"

export default class OffenceComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Pane width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="center" alignItems="center" padding={10} justifyContent="left">
        <Heading>BAB: +2; CMB +0</Heading>
      </Pane>
      <WeaponComponent/>
    </div>
  };
}