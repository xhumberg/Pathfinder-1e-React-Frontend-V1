import React from 'react';
import { Heading, Spinner, Table, Strong } from "evergreen-ui";

export default class AbilitiesComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }
  }

  render() {
      const abilityList = this.props.data;
      if (!abilityList) {
        return <div>Loading</div>
      }
      return <div>
        <Heading size={100}>Abilities</Heading>
        <Table width="100%">
            <Table.Head>
                <Table.TextHeaderCell>Ability</Table.TextHeaderCell>
                <Table.TextHeaderCell>Score</Table.TextHeaderCell>
                <Table.TextHeaderCell>Mod</Table.TextHeaderCell>
            </Table.Head>
            <Table.Body>
                {abilityList.map((ability) =>
                    <Table.Row>
                        <Table.TextCell><Strong>{ability.name}</Strong></Table.TextCell>
                        <Table.TextCell>{ability.value}</Table.TextCell>
                        <Table.TextCell>{ability.mod}</Table.TextCell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
      </div>
    return <div>
        {this.state.data.map((ability) =>
          <li>{ability.name}</li>
        )}
      </div>
  };
}