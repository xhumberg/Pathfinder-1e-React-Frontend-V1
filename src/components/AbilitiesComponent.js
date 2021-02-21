import React from 'react';
import { Heading, Spinner, Table, Strong } from "evergreen-ui";

export default class CapitalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      abilities: ["loading..."],
      loading: true
    }
  } 

  async componentDidMount() {
       const url = "https://test-pathfinder-sheet.herokuapp.com/character/prosopa";
       const response = await fetch(url);
       const data = await response.json();
       this.setState({abilities: data.ability, loading: false})
  }

  render() {

    if (this.state.loading) {
      return <div><Spinner /></div>
    } else {
        const abilityList = this.state.abilities;
        const abilityJson = abilityList.map((ability) => <li>{JSON.parse(ability).name}</li>);
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
                        <Table.TextCell><Strong>{JSON.parse(ability).name}</Strong></Table.TextCell>
                        <Table.TextCell>{JSON.parse(ability).value}</Table.TextCell>
                        <Table.TextCell>{JSON.parse(ability).mod}</Table.TextCell>
                    </Table.Row>
                )}
            </Table.Body>
        </Table>
      </div>
    }
  };
}