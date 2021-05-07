import CharacterComponent from "./components/CharacterComponent";
import AbilitiesComponent from "./components/AbilitiesComponent";
import BodyComponent from "./components/BodyComponent";
import CharacterSelectMenuComponent from "./components/CharacterSelectMenuComponent";
import './App.css';
import { Spinner, Pane, Button } from "evergreen-ui";
import Login from "./components/CustomGoogleLogin";
import Logout from "./components/CustomGoogleLogout"
import React from 'react';
import ToggleablesSidebarComponent from "./components/SidebarComponents/ToggleablesSidebarComponent";
import ResourcesSidebarComponent from "./components/SidebarComponents/ResourcesSidebarComponent"
import ItemsSidebarComponent from "./components/SidebarComponents/ItemsSidebarComponent";

// const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
const CHARACTER_SERVICE_URL = "http://localhost:8080";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      silentLoading: true,
      character: {},
      test: "hello",
      googleToken: {},
      loggedIn: false,
      availableCharacters: [],
      selectedCharacterID: "prosopa",
      toggleablesSidebarVisible: false,
      resourcesSidebarVisible: false,
      itemsSidebarVisible: false
    }
    this.toggleEffect = this.toggleEffect.bind(this);
    this.handleGoogleToken = this.handleGoogleToken.bind(this);
    this.handleGoogleLogout = this.handleGoogleLogout.bind(this);
    this.updateSelectedCharacter = this.updateSelectedCharacter.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.forceDatabaseReload = this.forceDatabaseReload.bind(this);
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

  async toggleEffect(effectToToggle) {
    this.setState({silentLoading: true});
    console.log("Updating sheet");
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/toggle/" + effectToToggle;
    if (this.state.googleToken.tokenObj)
      url = url + "?token=" + this.state.googleToken.tokenObj.id_token;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async forceDatabaseReload() {
    this.setState({loading: true});
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/forceReload";
    if (this.state.googleToken.tokenObj)
      url = url + "?token=" + this.state.googleToken.tokenObj.id_token;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, true);
  }

  componentDidMount() {
    this.updateCharacter(this.state.selectedCharacterID, true);
  }

  updateSelectedCharacter(newID) {
    console.log("Told to update character id " + newID);
    this.setState({selectedCharacterID: newID})
    this.updateCharacter(newID, true);
  }

  closeSidebar() {
    this.setState({toggleablesSidebarVisible: false, resourcesSidebarVisible: false, itemsSidebarVisible: false});
  }

  async updateCharacter(loadID, displayLoading) {
    this.setState({loading: displayLoading})
    console.log("Loading character " + loadID);
    var url = CHARACTER_SERVICE_URL + "/character/" + loadID;
    if (this.state.googleToken.tokenObj)
      url = url + "?token=" + this.state.googleToken.tokenObj.id_token;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({character: data, loading: false, silentLoading: false});
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
          <Pane display="flex" width="900px" margin="auto" alignItems="center" justifyContent="center">
            {loadComponent}
            {googleComponent}
          </Pane>
          <Pane display="flex" width="900px" background="tint2" borderRadius={3} margin="auto" alignItems="flex-end">
            <Pane flex={1} alignItems="center" display="flex" padding={10}>
              <CharacterComponent data={this.state.character}/>
            </Pane>
            <Pane alignItems="center" height="100%" padding={10} width="100%">
              <AbilitiesComponent data={this.state.character.ability}/>
              <Button onClick={() => this.setState({ toggleablesSidebarVisible: true })}>View Toggleables & Feats</Button>
              <Button onClick={() => this.setState({ resourcesSidebarVisible: true })}>View Resources & Abilities</Button>
              <Button onClick={() => this.setState({ itemsSidebarVisible: true })}>View Items & Gold</Button>
            </Pane>
          </Pane>
          <BodyComponent character={this.state.character}/>
          <ToggleablesSidebarComponent visible={this.state.toggleablesSidebarVisible} onClose={this.closeSidebar} 
            character={this.state.character} toggle={this.toggleEffect} silentLoad={this.state.silentLoading}
            forceDatabaseReload={this.forceDatabaseReload}/>
          <ResourcesSidebarComponent visible={this.state.resourcesSidebarVisible} onClose={this.closeSidebar}
            character={this.state.character} silentLoad={this.state.silentLoading}/>
          <ItemsSidebarComponent visible={this.state.itemsSidebarVisible} onClose={this.closeSidebar}
            character={this.state.character} silentLoad={this.state.silentLoading}/>
      </div>
  }
}

export default App;
