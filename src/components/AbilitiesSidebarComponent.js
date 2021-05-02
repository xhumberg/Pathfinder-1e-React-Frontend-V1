

import React from 'react';
import { SideSheet, Pane, Strong, SelectMenu, Button, Position, Spinner } from "evergreen-ui";
import SmallLabelledValueComponent from "./PaneComponents/SmallLabelledValueComponent";

export default class AbilitiesSidebarComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var inside = <Pane margin="auto" display="flex" alignItems="center" justifyContent="center" padding={100}>
      <Spinner />
    </Pane>
    if (!this.props.silentLoad) {
      inside = <Pane margin="auto" padding={30} display="flex" flexDirection="column" alignItems="center">
      <Strong>Toggleable Abilities<hr /></Strong>
      <SelectMenu title="Enable Ability" options={this.props.character.allowedAdjustments.map(label => ({ label, value: label }))} onSelect={(label) => this.props.toggle(label.value)} closeOnSelect={true}>
        <Button>Enable Ability</Button>
      </SelectMenu>
      {this.props.character.enabledAdjustments.map((ability) => <SmallLabelledValueComponent label={ability} onClick={() => this.props.toggle(ability)} />)}
      <Strong marginTop={25}>Database Refresh<hr /></Strong>
      <Button onClick={async () => this.props.forceDatabaseReload()}>Reload From Database</Button>
    </Pane>
    } 
    
    return <SideSheet position={Position.LEFT} width={500} isShown={this.props.visible} onCloseComplete={() => this.props.onClose()}>
        {inside}
      </SideSheet>
  };
}