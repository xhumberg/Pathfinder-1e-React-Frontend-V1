import CharacterComponent from "./components/CharacterComponent";
import EffectsPopoverComponent from "./components/EffectsPopoverComponent";
import AbilitiesComponent from "./components/AbilitiesComponent";
import './App.css';
import {LogInIcon, Pane} from "evergreen-ui";
import React from 'react';

const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com/character/prosopa";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      character: {},
      test: "hello"
    }
    this.handleCallback = this.handleCallback.bind(this);
  }

  async handleCallback(childData) {
    console.log("Updating sheet");
    const url = CHARACTER_SERVICE_URL;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({character: data})
  }

  async componentDidMount() {
    console.log("Updating sheet");
    const url = CHARACTER_SERVICE_URL;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({character: data})
  }

  render = () => {
      return <div className="App">
        <Pane display="flex" justifyContent="space-between">
          <Pane display="flex" width="80%" background="tint2" borderRadius={3} margin="auto" alignItems="flex-end">
            <Pane flex={1} alignItems="center" display="flex" padding={10}>
              <CharacterComponent/>
            </Pane>
            <Pane alignItems="center" height="100%" padding={10} width="100%">
              <AbilitiesComponent data={this.state.character.ability}/>
              <EffectsPopoverComponent parentCallback={this.handleCallback}/>
            </Pane>
          </Pane>
       </Pane>
      </div>
  }
}

export default App;
