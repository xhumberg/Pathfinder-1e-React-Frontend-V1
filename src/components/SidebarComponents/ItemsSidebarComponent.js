

import React from 'react';
import { SideSheet, Pane, Strong, Position, Spinner } from "evergreen-ui";
import ClickForDescriptionComponent from "../ClickForDescriptionComponent"
import TrackedResourceComponent from "../TrackedResourceComponent"
import SmallLabelledValueComponent from '../PaneComponents/SmallLabelledValueComponent';

export default class ItemsSidebarComponent extends React.Component {

  render() {
    var inside = <Pane margin="auto" display="flex" alignItems="center" justifyContent="center" padding={100}>
      <Spinner />
    </Pane>
    if (!this.props.silentLoad) {
      inside = <Pane margin="auto" padding={30} display="flex" flexDirection="column" alignItems="center">
      <SmallLabelledValueComponent label="Total Earned Gold" value="47000"/>
      <SmallLabelledValueComponent label="Total Spent Gold" value="46000"/>
      <SmallLabelledValueComponent label="Total Remaining Gold" value="1000"/>
      <Pane height={20}></Pane>
      <Strong>Items<hr /></Strong>
      <ClickForDescriptionComponent name="Test Item" description="Yay Stuff!"/>
      <TrackedResourceComponent name="Wand of Cure Light Wounds" description="Heals! Yay!" amount={48}/>
    </Pane>
    } 
    
    return <SideSheet position={Position.RIGHT} width={500} isShown={this.props.visible} onCloseComplete={() => this.props.onClose()}>
        {inside}
      </SideSheet>
  };
}