import CharacterComponent from "./components/CharacterComponent";
import EffectsPopoverComponent from "./components/EffectsPopoverComponent";
import AbilitiesComponent from "./components/AbilitiesComponent";
import BodyComponent from "./components/BodyComponent";
import CharacterSelectMenuComponent from "./components/CharacterSelectMenuComponent";
import './App.css';
import {Spinner, Pane, Button, Paragraph, SideSheet, Position} from "evergreen-ui";
import Login from "./components/CustomGoogleLogin";
import Logout from "./components/CustomGoogleLogout"
import React from 'react';

const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
// const CHARACTER_SERVICE_URL = "http://localhost:8080";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      character: {},
      test: "hello",
      googleToken: {},
      loggedIn: false,
      availableCharacters: [],
      selectedCharacterID: "prosopa"
    }
    this.handleCallback = this.handleCallback.bind(this);
    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
    this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this);
  }

  async handleGoogleToken(token) {
    this.setState({googleToken: token, loggedIn: true});
    console.log("Fetching load information", this.state.googleToken);
    const url = CHARACTER_SERVICE_URL + "/character/load?token=" + this.state.googleToken.tokenObj.id_token;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({availableCharacters: data})
  }

  handleGoogleLogout() {
    this.setState({googleToken: {}, loggedIn: false, availableCharacters: []})
  }

  async handleCallback(effectToToggle) {
    console.log("Updating sheet");
    const toggleUrl = CHARACTER_SERVICE_URL + "/character/prosopa/toggle/" + effectToToggle;
    const toggleResponse = await fetch(toggleUrl, {method: 'PUT'});
    const fetchUrl = CHARACTER_SERVICE_URL + "/character/prosopa";
    const response = await fetch(fetchUrl);
    const data = await response.json();
    this.setState({character: data})
  }

  componentDidMount() {
    this.updateCharacter(this.state.selectedCharacterID);
  }

  updateSelectedCharacter(newID) {
    console.log("Told to update character id " + newID);
    this.setState({selectedCharacterID: newID})
    this.updateCharacter(newID);
  }

  async updateCharacter(loadID) {
    this.setState({loading: true})
    console.log("Loading character " + loadID);
    var url = CHARACTER_SERVICE_URL + "/character/" + loadID;
    if (this.state.googleToken.tokenObj)
      url = url + "?token=" + this.state.googleToken.tokenObj.id_token;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({character: data, loading: false});
  }

  render = () => {
      let googleComponent;
      let loadComponent;
      if (this.state.loggedIn) {
        googleComponent = <Logout handleLogout={this.handleGoogleLogout} name={this.state.googleToken.profileObj.name}/>
        loadComponent = <CharacterSelectMenuComponent availableCharacters={this.state.availableCharacters} updateSelectedCharacter={this.updateSelectedCharacter}/>
      } else {
        googleComponent = <Login handleToken={this.handleGoogleToken}/>
        loadComponent = "";
      }

      if (this.state.loading) {
        return <Pane display="flex" alignItems="center" justifyContent="center" height={400}><Spinner /></Pane>
      } else return <div className="App">
          <Pane display="flex" width="900px" margin="auto" alignItems="center" justifyContent = "center" alignItems="center">
            {loadComponent}
            {googleComponent}
          </Pane>
          <Pane display="flex" width="900px" background="tint2" borderRadius={3} margin="auto" alignItems="flex-end">
            <Pane flex={1} alignItems="center" display="flex" padding={10}>
              <CharacterComponent data={this.state.character}/>
            </Pane>
            <Pane alignItems="center" height="100%" padding={10} width="100%">
              <AbilitiesComponent data={this.state.character.ability}/>
              <EffectsPopoverComponent parentCallback={this.handleCallback}/>
            </Pane>
          </Pane>
          <BodyComponent />
      </div>
  }
}

export default App;
