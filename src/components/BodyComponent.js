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
    var displayWidth = "33%"
    var spellsButton = "";
    if (this.props.character.spellcasting.length > 0) {
      displayWidth="25%"
      spellsButton = <Button height="40" iconAfter={FlashIcon} appearance="primary" intent="warning" width={displayWidth} justifyContent="center" onClick={() => this.setState({selectedIndex: 2})} disabled={this.state.selectedIndex === 2}>Spells</Button>

    }
    var displayPane = <Pane></Pane>; 
    if (this.state.selectedIndex === 0) {
      displayPane = <OffenceComponent character={this.props.character}/>
    } else if (this.state.selectedIndex === 1) {
      displayPane = <DefenseComponent character={this.props.character} heal={this.props.heal} damage={this.props.damage}/>
    } else if (this.state.selectedIndex === 2) {
      displayPane = <SpellsComponent character={this.props.character} castSpell={this.props.castSpell} uncastSpell={this.props.uncastSpell}/>
    } else {
      displayPane = <SkillsAndBackgroundComponent character={this.props.character}/>
    }

    return <div>
      <Pane display="flex" width="950px" borderRadius={3} margin="auto" alignItems="center" padding={10} justifyContent="center" background="tint2">
        <Button height="40" iconAfter={TakeActionIcon} appearance="primary" intent="danger" width={displayWidth} justifyContent="center" onClick={() => this.setState({selectedIndex: 0})} disabled={this.state.selectedIndex === 0}>Offence</Button>
        <Button height="40" iconAfter={BadgeIcon} appearance="primary" intent="success" width={displayWidth} justifyContent="center" onClick={() => this.setState({selectedIndex: 1})} disabled={this.state.selectedIndex === 1}>Defense</Button>
        {spellsButton}
        <Button height="40" iconAfter={PersonIcon} appearance="primary" width={displayWidth} justifyContent="center" onClick={() => this.setState({selectedIndex: 3})} disabled={this.state.selectedIndex === 3}>Skills and Background</Button>
      </Pane>
      {displayPane}
    </div>
  }
}