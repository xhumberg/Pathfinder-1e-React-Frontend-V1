import React from 'react';
import { Pane, Heading, Text, UnorderedList, ListItem } from "evergreen-ui";
import LabelledNumberComponent from './PaneComponents/LabelledNumberComponent';
import LargeLabelledNumberComponent from './PaneComponents/LargeLabelledNumberComponent';

export default class DefenseComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Pane display="flex" width="950px" background="greenTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={10} justifyContent="center">
          <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
            <LargeLabelledNumberComponent label="AC" value={this.props.character.ac} />
            <LabelledNumberComponent label="Flat-Footed" value={this.props.character.flatFooted} />
            <LabelledNumberComponent label="Touch" value={this.props.character.touch} />
            <LabelledNumberComponent label="CMD" value={this.props.character.cmd} />
          </Pane>
          <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
            <LabelledNumberComponent label="Fortitude" value={this.props.character.fortitude} />
            <LabelledNumberComponent label="Reflex" value={this.props.character.reflex} />
            <LabelledNumberComponent label="Will" value={this.props.character.will} />
            <Pane elevation={2} background="white" width="350px" padding={20} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Heading size={100} marginRight={200}>Special Modifiers</Heading>
              <UnorderedList>
                {this.props.character.specialDefenses ? this.props.character.specialDefenses.map((defense) => <ListItem>{defense}</ListItem>) : <ListItem>None</ListItem>}
              </UnorderedList>
            </Pane>
          </Pane>
        </Pane>
    </div>
  };
}