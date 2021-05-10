

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
        <SmallLabelledValueComponent label="Total Earned Gold" value={this.props.character.gold.totalEarned}/>
        <SmallLabelledValueComponent label="Total Spent Gold" value={this.props.character.gold.totalSpent}/>
        <SmallLabelledValueComponent label="Total Remaining Gold" value={this.props.character.gold.totalRemaining}/>
        <Pane height={20}></Pane>
        <Strong>Items<hr /></Strong>
        {this.props.character.trackedItems.map((item) => <TrackedResourceComponent name={item.name} description={item.description} amount={item.amount} id={item.resourceId} type="ITEM" reduce={this.props.reduce} increase={this.props.increase}/>)}
        {this.props.character.items.map((item) => <ClickForDescriptionComponent name={item.name} description={item.description} />)}
    </Pane>
    } 
    
    return <SideSheet position={Position.RIGHT} width={500} isShown={this.props.visible} onCloseComplete={() => this.props.onClose()}>
        {inside}
      </SideSheet>
  };
}