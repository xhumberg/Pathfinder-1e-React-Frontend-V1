

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
      <ClickForDescriptionComponent name="Test Class Ability" description="Yay Stuff!"/>
      <TrackedResourceComponent name="Test Tracked Resource" description="Yay Stuff!" amount={3}/>

      <Strong marginTop={25}>Racial Abilities<hr /></Strong>
      <ClickForDescriptionComponent name="Resist Racial Ability" description="This does things!"/>
      
      <Strong marginTop={25}>Misc Tracked Resources<hr /></Strong>
      <TrackedResourceComponent name="Test Resource" description="This resource can be used!" amount={1}/>
    </Pane>
    } 
    
    return <SideSheet position={Position.RIGHT} width={500} isShown={this.props.visible} onCloseComplete={() => this.props.onClose()}>
        {inside}
      </SideSheet>
  };
}