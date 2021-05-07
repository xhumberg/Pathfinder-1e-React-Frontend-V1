import React from 'react';
import { Pane, Heading, UnorderedList, ListItem } from "evergreen-ui";
import WeaponBoxComponent from "./PaneComponents/WeaponBoxComponent"
import LabelledNumberComponent from './PaneComponents/LabelledNumberComponent';

export default class OffenceComponent extends React.Component {

  render() {
    return <div>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" marginBottom={0} alignItems="flex-start" padding={20} justifyContent="center">
        <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="Initiative" value="+6" />
        </Pane>
      </Pane>
      <Pane width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="center" justifyContent="left" padding={1}>
        <WeaponBoxComponent name="Heavy Crossbow" attackMods="+6" specials="Range 120 ft." damage="1d10 | 19-20x2" />
        <WeaponBoxComponent name="+1 Furious Seven-Branched Sword" attackMods="+13/+10/+5" specials="Disarm, Monk" damage="1d10+16 | 20x3" />
      </Pane>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={20} justifyContent="center">
        <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="BAB" value="3" />
        </Pane>
        <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
          <LabelledNumberComponent label="CMB" value="+9" />
        </Pane>
      </Pane>
      <Pane display="flex" width="950px" background="redTint" borderRadius={3} margin="auto" alignItems="flex-start" justifyContent="center">
          <Pane elevation={2} background="white" width={825} padding={20} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
            <Heading size={100}>Special Modifiers</Heading>
            <UnorderedList>
              <ListItem>+2 attack and damage against humans</ListItem>
            </UnorderedList>
          </Pane>
        </Pane>
    </div>
  };
}