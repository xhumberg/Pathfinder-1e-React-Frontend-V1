import React from 'react';
import { Pane, Button, TakeActionIcon, BadgeIcon, FlashIcon, PersonIcon } from "evergreen-ui";
import OffenceComponent from "./OffenceComponent"
import DefenseComponent from "./DefenseComponent"
import SpellsComponent from "./SpellsComponent"
import SkillsAndBackgroundComponent from "./SkillsAndBackgroundComponent"

export default class BodyComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  render() {
    var displayPane = <Pane></Pane>; 
    var bgColor = "tint2"
    if (this.state.selectedIndex == 0) {
      bgColor = "redTint"
      displayPane = <OffenceComponent/>
    } else if (this.state.selectedIndex == 1) {
      bgColor = "greenTint"
      displayPane = <DefenseComponent/>
    } else if (this.state.selectedIndex == 2) {
      bgColor = "yellowTint"
      displayPane = <SpellsComponent character={this.props.character}/>
    } else {
      bgColor="blueTint"
      displayPane = <SkillsAndBackgroundComponent/>
    }

    return <div>
      <Pane display="flex" width="950px" background={bgColor} borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
        <Button height="40" iconAfter={TakeActionIcon} appearance="primary" intent="danger" padding={20} width="25%" justifyContent="center" onClick={() => this.setState({selectedIndex: 0})}>Offence</Button>
        <Button height="40" iconAfter={BadgeIcon} appearance="primary" intent="success" padding={20} width="25%" justifyContent="center" onClick={() => this.setState({selectedIndex: 1})}>Defense</Button>
        <Button height="40" iconAfter={FlashIcon} appearance="primary" intent="warning" padding={20} width="25%" justifyContent="center" onClick={() => this.setState({selectedIndex: 2})}>Spells</Button>
        <Button height="40" iconAfter={PersonIcon} appearance="primary" padding={20} width="25%" justifyContent="center" onClick={() => this.setState({selectedIndex: 3})}>Skills and Background</Button>
      </Pane>
      {displayPane}
    </div>
  }
}