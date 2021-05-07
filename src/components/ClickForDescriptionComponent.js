import React from 'react';
import { Pane, Dialog } from "evergreen-ui";
import SmallLabelledValueComponent from './PaneComponents/SmallLabelledValueComponent';

export default class ClickForDescriptionComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nameOnDisplay: props.name,
          descriptionOnDisplay: props.description,
          displayDialog: false
        }
      }


    render() {
        return <Pane alignItems="center" height="auto" padding={2}>
            <Dialog hasFooter={false} isShown={this.state.displayDialog} title={this.state.nameOnDisplay} onCloseComplete={() => this.setState({displayDialog: false})}>
                <div dangerouslySetInnerHTML={{__html: this.state.descriptionOnDisplay}} />
            </Dialog>
            <SmallLabelledValueComponent label={this.props.name} onClick={() => this.setState({displayDialog: true})} value={this.props.value}/>
        </Pane>
    };
}