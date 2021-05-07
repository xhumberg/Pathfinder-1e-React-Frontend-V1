

import React from 'react';
import { SideSheet, Pane, Strong, Position, Spinner } from "evergreen-ui";
import ClickForDescriptionComponent from "../ClickForDescriptionComponent"
import TrackedResourceComponent from "../TrackedResourceComponent"

export default class ResourcesSidebarComponent extends React.Component {

  render() {
    var inside = <Pane margin="auto" display="flex" alignItems="center" justifyContent="center" padding={100}>
      <Spinner />
    </Pane>
    if (!this.props.silentLoad) {
      inside = <Pane margin="auto" padding={30} display="flex" flexDirection="column" alignItems="center">
      <Strong>Class Abilities<hr /></Strong>
      {this.props.character.classTrackedFeatures.map((feature) => <TrackedResourceComponent name={feature.name} description={feature.description} amount={feature.amount}/>)}
      {this.props.character.classFeatures.map((feature) => <ClickForDescriptionComponent name={feature.name} description={feature.description} />)}

      <Strong marginTop={25}>Racial Abilities<hr /></Strong>
      {this.props.character.racialTraits.map((trait) => <ClickForDescriptionComponent name={trait.name} description={trait.description} />)}
      
      <Strong marginTop={25}>Misc Tracked Resources<hr /></Strong>
      {this.props.character.miscTrackedResources.map((resource) => <TrackedResourceComponent name={resource.name} description={resource.description} amount={resource.amount} />)}
    </Pane>
    } 
    
    return <SideSheet position={Position.RIGHT} width={500} isShown={this.props.visible} onCloseComplete={() => this.props.onClose()}>
        {inside}
      </SideSheet>
  };
}