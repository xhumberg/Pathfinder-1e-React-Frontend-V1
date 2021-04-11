import React from 'react';
import { Pane } from "evergreen-ui";
import SmallLabelledValueComponent from './PaneComponents/SmallLabelledValueComponent';
import LargeLabelledValueComponent from './PaneComponents/LargeLabelledNumberComponent';

export default class SkillsAndBackgroundComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Pane display="flex" width="950px" background="yellowTint" borderRadius={3} margin="auto" alignItems="flex-start" padding={10} justifyContent="center">
          <Pane display="flex" width="475px" margin="auto" alignItems="center" flexDirection="column">
            <SmallLabelledValueComponent label="Acrobatics" value="+3" />
            <SmallLabelledValueComponent label="Appraise" value="+8" />
            <SmallLabelledValueComponent label="Bluff" value="+19" />
            <SmallLabelledValueComponent label="Climb" value="-2" />
          </Pane>
          <Pane display="flex" width="475px" margin="auto" justifyContent="flex-start" alignItems="center" flexDirection="column">
            <LargeLabelledValueComponent label="Class(es)" value="Exploiter Wizard 5 / Harrower 3" />
            <SmallLabelledValueComponent label="Race" value="Tiefling" />
            <SmallLabelledValueComponent label="Gender" value="Female" />
          </Pane>
        </Pane>
    </div>
  };
}