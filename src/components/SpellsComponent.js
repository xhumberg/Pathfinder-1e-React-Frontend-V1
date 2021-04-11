import React from 'react';
import { Pane, Heading, Text, Checkbox, Popover, Button, Table, Dialog} from "evergreen-ui";

export default class SpellsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      spellNameOnDisplay: "",
      spellDescriptionOnDisplay: "",
      displaySpellDialog: false
    }
  }

  render() {
    return <div>
        <Pane width="950px" background="yellowTint" borderRadius={3} margin="auto" alignItems="center" padding={5} justifyContent="center">
            <Heading size={700}>Exploiter Wizard Spells Prepped</Heading>
            <Heading size={100} marginTop="0px">Caster Level: 8; Concentration +15</Heading>
            <hr width="250px"/>
            <Heading size={600} marginBottom="5px">3rd Level Spells (3/day)</Heading>
            <Table width="350px" margin="auto">
              <Table.Body>
                <Table.Row alignItems="center" height="auto" padding={2}>
                  <Button>Cast</Button>
                  <Button appearance="minimal" height={40} onClick={() => this.setState({displaySpellDialog: true, spellNameOnDisplay: "Spell 1", spellDescriptionOnDisplay: "This is spell 1"})}>Charitable Impulse (DC 19)</Button>
                </Table.Row>

                <Table.Row alignItems="center" height="auto" padding={2}>
                  <Button>Cast</Button>
                  <Button appearance="minimal" height={40} onClick={() => this.setState({displaySpellDialog: true, spellNameOnDisplay: "Spell 2", spellDescriptionOnDisplay: "This is spell 2"})}>Charitable Impulse (DC 19)</Button>
                </Table.Row>
              </Table.Body>
            </Table>

            <Dialog hasFooter={false} isShown={this.state.displaySpellDialog} title={this.state.spellNameOnDisplay} onCloseComplete={() => this.setState({displaySpellDialog: false})} confirmLabel="Woo?">
              {this.state.spellDescriptionOnDisplay}
            </Dialog>
        </Pane>
        


    </div>
  };
}