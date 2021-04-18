import React from 'react';
import { Table, Button, Dialog } from "evergreen-ui";
import SmallLabelledValueComponent from './PaneComponents/SmallLabelledValueComponent';

export default class SpellRowComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          spellNameOnDisplay: props.SpellName,
          spellDescriptionOnDisplay: props.SpellDescription,
          displaySpellDialog: false
        }
      }


    render() {
        return <Table.Row alignItems="center" height="auto" padding={2}>
            <Dialog hasFooter={false} isShown={this.state.displaySpellDialog} title={this.state.spellNameOnDisplay} onCloseComplete={() => this.setState({displaySpellDialog: false})} confirmLabel="Woo?">
                <div dangerouslySetInnerHTML={{__html: this.state.spellDescriptionOnDisplay}} />
            </Dialog>
            <Button>Cast</Button>
            <SmallLabelledValueComponent label={this.props.SpellName} onClick={() => this.setState({displaySpellDialog: true})}/>
        </Table.Row>
    };
}