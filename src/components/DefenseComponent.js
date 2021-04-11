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
            <LargeLabelledNumberComponent label="AC" value="22" />
            <LabelledNumberComponent label="Flat-Footed" value="20" />
            <LabelledNumberComponent label="Touch" value="14" />
            <LabelledNumberComponent label="CMD" value="13" />
          </Pane>
          <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
            <LabelledNumberComponent label="Fortitude" value="+4" />
            <LabelledNumberComponent label="Reflex" value="+6" />
            <LabelledNumberComponent label="Will" value="+6" />
            <Pane elevation={2} background="white" width="350px" padding={20} margin={12} display="flex" justifyContent="center" alignItems="center" flexDirection="column">
              <Heading size={100} marginRight={200}>Special Modifiers</Heading>
              <UnorderedList>
                <ListItem>+2 on Will saves against Enchantment effects</ListItem>
              </UnorderedList>
            </Pane>
          </Pane>
        </Pane>
    </div>
  };
}