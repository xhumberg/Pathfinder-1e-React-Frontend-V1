import React from 'react';
import { Pane, Heading, UnorderedList, ListItem } from "evergreen-ui";
import LabelledNumberComponent from './PaneComponents/LabelledNumberComponent';
import LargeLabelledNumberComponent from './PaneComponents/LargeLabelledNumberComponent';
import HPComponent from './HPComponent';

export default class DefenseComponent extends React.Component {

  render() {
    return <div>
        <HPComponent currentHP={this.props.character.currentHp} maxHP={this.props.character.maxHp} width={800} heal={this.props.heal} damage={this.props.damage}/>
        <Pane display="flex" width="950px" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={10} justifyContent="center">
          <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
            <LargeLabelledNumberComponent label="AC" value={this.props.character.ac} />
            <LabelledNumberComponent label="Flat-Footed" value={this.props.character.flatFooted} />
            <LabelledNumberComponent label="Touch" value={this.props.character.touch} />
          </Pane>
          <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
            <LabelledNumberComponent label="Fortitude" value={this.props.character.fortitude} />
            <LabelledNumberComponent label="Reflex" value={this.props.character.reflex} />
            <LabelledNumberComponent label="Will" value={this.props.character.will} />
            <LabelledNumberComponent label="CMD" value={this.props.character.cmd} />
          </Pane>
        </Pane>
        <Pane display="flex" width="950px" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-start" justifyContent="center">
        <Pane elevation={2} background="white" width="825px" padding={20} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Heading size={100}>Special Modifiers<hr /></Heading>
          <UnorderedList>
            {this.props.character.specialDefenses ? this.props.character.specialDefenses.map((defense) => <ListItem>{defense}</ListItem>) : <ListItem>None</ListItem>}
          </UnorderedList>
        </Pane>
        </Pane>
    </div>
  };
}