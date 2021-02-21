import React from 'react';
import {TextInput, Button, EditIcon} from "evergreen-ui";

export default class CapitalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPhrase: "",
      loading: false
    }
  } 

  async updatePhrase() {
    this.setState({loading: true})
    this.render()
    console.log("XAH: We want to capitalize " + this.state.currentPhrase);
    const url = "http://localhost:8080/capital/" + this.state.currentPhrase;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({currentPhrase: data.caps, loading: false})
  }

  render() {
    return <div>
      <TextInput type="text" name="phrase" value={this.state.currentPhrase} onChange={e => this.setState({currentPhrase: e.target.value})}/>
      <br />
      <Button height={50} marginRight={16} appearance = "primary" intent="none" isLoading={this.state.loading} onClick={() => this.updatePhrase()}>Capitalize!!!</Button>
    </div>
  };
}