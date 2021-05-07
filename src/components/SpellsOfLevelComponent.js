import React from 'react';
import { Heading, Table} from "evergreen-ui";

export default class SpellsOfLevelComponent extends React.Component {

  render() {
    return  <div>
      <Heading size={600} marginTop={20} marginBottom="5px">{this.props.levelString} ({this.props.perDay}/day)</Heading>
      <Table width="350px" margin="auto">
        <Table.Body>
          {this.props.spellList}
        </Table.Body>
      </Table>
    </div>
  };
}