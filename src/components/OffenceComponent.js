import React from 'react';
import { Pane, Heading, UnorderedList, ListItem } from "evergreen-ui";
import WeaponBoxComponent from "./PaneComponents/WeaponBoxComponent"
import LabelledNumberComponent from './PaneComponents/LabelledNumberComponent';

export default class OffenceComponent extends React.Component {

  render() {
    return <div>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" marginBottom={0} alignItems="flex-start" padding={20} justifyContent="center">
        <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="Initiative" value={this.props.character.initiative}/>
        </Pane>
      </Pane>
      <Pane width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="center" justifyContent="left" padding={1}>
        {this.props.character.weapons.map((weapon) => <WeaponBoxComponent name={weapon.name} attackMods={weapon.attackMods} specials={weapon.specialTags} damage={weapon.damage} />)}
      </Pane>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={20} justifyContent="center">
        <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="BAB" value={this.props.character.bab} />
        </Pane>
        <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="CMB" value={this.props.character.cmb} />
        </Pane>
      </Pane>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="flex-start" justifyContent="center">
          <Pane elevation={2} background="white" width={825} padding={20} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading size={100}>Special Modifiers</Heading>
            <UnorderedList>
            {this.props.character.specialOffenses ? this.props.character.specialOffenses.map((offense) => <ListItem>{offense}</ListItem>) : <ListItem>None</ListItem>}
            </UnorderedList>
          </Pane>
        </Pane>
    </div>
  };
}