import React from 'react';
import { Pane } from "evergreen-ui";
import SmallLabelledValueComponent from './PaneComponents/SmallLabelledValueComponent';
import LabelledNumberComponent from './PaneComponents/LabelledNumberComponent';
import LargeLabelledValueComponent from './PaneComponents/LargeLabelledNumberComponent';

export default class SkillsAndBackgroundComponent extends React.Component {

  render() {
    return <div>
        <Pane display="flex" width="950px" background="blueTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={10} justifyContent="center">
          <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
            {this.props.character.skills.map((skill) => <SmallLabelledValueComponent label={skill.name} value={skill.value} />)}
          </Pane>
          <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
            <LargeLabelledValueComponent label="Class(es)" value={this.props.character.classes} />
            <LabelledNumberComponent label="Senses" value={this.props.character.senses} />
            <LabelledNumberComponent label="Speed" value={this.props.character.landSpeed} />
            <LabelledNumberComponent label="Size" value={this.props.character.size} />
            <LabelledNumberComponent label="Alignment" value={this.props.character.alignment} />
            <LabelledNumberComponent label="Gender" value={this.props.character.gender} />
            <LabelledNumberComponent label="Race" value={this.props.character.race} />
            <LabelledNumberComponent label="Type" value={this.props.character.typeAndSubtype} />
            <LabelledNumberComponent label="Age" value={this.props.character.age} />
            <LabelledNumberComponent label="Height" value={this.props.character.height} />
            <LabelledNumberComponent label="Weight" value={this.props.character.weight} />
            <LabelledNumberComponent label="Total Level" value={this.props.character.totalLevel} />
          </Pane>
        </Pane>
    </div>
  };
}