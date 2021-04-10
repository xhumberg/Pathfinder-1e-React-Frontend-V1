import { SelectMenu, Button } from 'evergreen-ui';
import React from 'react';

const clientId = '840466999232-ftkvdkmekuig8i89t793qggpmun6td9d.apps.googleusercontent.com';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(item) {
        this.setState({selected: item.value})
        console.log("Selected character ", item.value);
        this.props.updateSelectedCharacter(JSON.parse(item.value).characterID);
    }

    render() {
        let buttonText;
        if (this.state.selected) {
            buttonText = JSON.parse(this.state.selected).characterName
        } else {
            buttonText = "Load Character...";
        }
    return <SelectMenu
    title="Select Character"
    options={
        this.props.availableCharacters
        .map(character => ({ label: JSON.parse(character).characterName , value: character }))
    }
    selected={this.state.selected}
    onSelect={item => this.onSelect(item)}
    >
        <Button height={42} width={400}>{buttonText}</Button>
    </SelectMenu>
    }

}