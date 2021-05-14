import CharacterComponent from "./components/CharacterComponent";
import AbilitiesComponent from "./components/AbilitiesComponent";
import BodyComponent from "./components/BodyComponent";
import CharacterSelectMenuComponent from "./components/CharacterSelectMenuComponent";
import './App.css';
import { Spinner, Pane, Button, Heading } from "evergreen-ui";
import Login from "./components/CustomGoogleLogin";
import Logout from "./components/CustomGoogleLogout"
import React from 'react';
import ToggleablesSidebarComponent from "./components/SidebarComponents/ToggleablesSidebarComponent";
import ResourcesSidebarComponent from "./components/SidebarComponents/ResourcesSidebarComponent"
import ItemsSidebarComponent from "./components/SidebarComponents/ItemsSidebarComponent";
import SmallLabelledValueComponent from './components/PaneComponents/SmallLabelledValueComponent';

const CHARACTER_SERVICE_URL = "https://test-pathfinder-sheet.herokuapp.com";
// const CHARACTER_SERVICE_URL = "http://localhost:8080";

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      silentLoading: true,
      character: null,
      googleToken: {},
      loggedIn: false,
      availableCharacters: [],
      selectedCharacterID: "",
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
    this.castSpell = this.castSpell.bind(this);
    this.uncastSpell = this.uncastSpell.bind(this);
    this.heal = this.heal.bind(this);
    this.damage = this.damage.bind(this);
    this.reduce = this.reduce.bind(this);
    this.increase = this.increase.bind(this);
  }

  async handleGoogleToken(token) {
    this.setState({googleToken: token, loggedIn: true});
    console.log("Fetching load information", this.state.googleToken);
    const url = CHARACTER_SERVICE_URL + "/character/load?token=" + this.state.googleToken.tokenObj.id_token;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({availableCharacters: data})

    console.log(window.location.href)
    var selectedCharacterID = "";
    if (window.location.href.includes('/') && window.location.href.split('/').length === 4) {
      selectedCharacterID = window.location.href.split('/')[3];
    }
    if (selectedCharacterID === "home") {
      selectedCharacterID = "";
    }
    console.log("On load, saw selected character ID of " + selectedCharacterID)
    if (selectedCharacterID !== "") {
      this.updateSelectedCharacter(selectedCharacterID);
    }
  }

  handleGoogleLogout() {
    this.setState({googleToken: {}, loggedIn: false, availableCharacters: [], character: null, selectedCharacterID: "", 
    toggleablesSidebarVisible: false, resourcesSidebarVisible: false, itemsSidebarVisible: false});
    window.history.replaceState(null, null, "/home")
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

  async castSpell(classId, spellName, spellLevel) {
    this.setState({silentLoading: true});
    console.log("Casting spell: " + spellName);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/castSpell"
    + "?token=" + this.state.googleToken.tokenObj.id_token
    + "&classId=" + classId
    + "&spellName=" + spellName
    + "&level=" + spellLevel;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async uncastSpell(classId, spellName, spellLevel) {
    this.setState({silentLoading: true});
    console.log("Uncasting spell: " + spellName);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/uncastSpell"
    + "?token=" + this.state.googleToken.tokenObj.id_token
    + "&classId=" + classId
    + "&spellName=" + spellName
    + "&level=" + spellLevel;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async heal(amount) {
    this.setState({silentLoading: true});
    console.log("Healing " + amount);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/heal"
    + "?token=" + this.state.googleToken.tokenObj.id_token
    + "&amount=" + amount;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async damage(amount) {
    this.setState({silentLoading: true});
    console.log("Healing " + amount);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/damage"
    + "?token=" + this.state.googleToken.tokenObj.id_token
    + "&amount=" + amount;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async reduce(resourceId, type) {
    this.setState({silentLoading: true});
    console.log("Reducing " + type + " resource id: " + resourceId);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/reduceResource/" + type + "/" + resourceId + "?token=" + this.state.googleToken.tokenObj.id_token;
    await fetch(url, {method: 'PUT'});
    this.updateCharacter(this.state.selectedCharacterID, false);
  }

  async increase(resourceId, type) {
    this.setState({silentLoading: true});
    console.log("Reducing " + type + " resource id: " + resourceId);
    var url = CHARACTER_SERVICE_URL + "/character/" + this.state.selectedCharacterID + "/increaseResource/" + type + "/" + resourceId + "?token=" + this.state.googleToken.tokenObj.id_token;
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
  }

  updateSelectedCharacter(newID) {
    console.log("Told to update character id " + newID);
    this.setState({selectedCharacterID: newID});
    this.updateCharacter(newID, true);
  }

  updateUrl() {
    window.history.replaceState(null, null, "/" + this.state.selectedCharacterID)
    console.log(window.location.href)
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
    this.updateUrl();
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

      var loginPane = <Pane display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" height={700}>
      <Heading size={900}>Xavier's Pathfinder Character Sheet</Heading>
      <Heading size={900}>for Pathfinder 1st Edition</Heading>
      <Pane display="flex" flexDirection="column" elevation={3} height={200} width={500} alignItems="center" justifyContent="center" borderRadius={50} marginTop={50}>
        <Pane padding={10} margin="auto">
        {googleComponent}
        </Pane>
      </Pane>
    </Pane>

      var loadPane = <Pane display="flex" alignItems="center" justifyContent="center" margin="auto" height={700}>
        <Pane display="flex" flexDirection="column" elevation={3} padding={20} width={500} alignItems="center" justifyContent="center" borderRadius={50}>
          <Heading size={700}>Load character:</Heading>
          <Pane border scroll display="flex" flexDirection="column" alignItems="center" justifyContent="center" margin="auto" width={425} marginTop={10} padding={10} borderRadius={10}>
            {this.state.availableCharacters.map((character) => <SmallLabelledValueComponent label={JSON.parse(character).characterName} onClick={() => this.updateSelectedCharacter(JSON.parse(character).characterID)}/>)}
          </Pane>
          <Pane padding={10} margin="auto" marginBottom={0} marginTop={20}>
          {googleComponent}
          </Pane>
        </Pane>
      </Pane>

      if (this.state.loading) {
        return <Pane display="flex" alignItems="center" justifyContent="center" height={400}><Spinner /></Pane>
      } else if (!this.state.loggedIn) {
        return <div className="App">
          {loginPane}
        </div>
      } else if (this.state.selectedCharacterID === "" || this.state.character === null) {
        return <div className="App">
          {loadPane}
        </div>
      } else { 
        var appPane = <Pane>
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
        <BodyComponent character={this.state.character} castSpell={this.castSpell} uncastSpell={this.uncastSpell} heal={this.heal} damage={this.damage}/>
        <ToggleablesSidebarComponent visible={this.state.toggleablesSidebarVisible} onClose={this.closeSidebar} 
          character={this.state.character} toggle={this.toggleEffect} silentLoad={this.state.silentLoading}
          forceDatabaseReload={this.forceDatabaseReload}/>
        <ResourcesSidebarComponent visible={this.state.resourcesSidebarVisible} onClose={this.closeSidebar}
          character={this.state.character} silentLoad={this.state.silentLoading}
          reduce={this.reduce} increase={this.increase}/>
        <ItemsSidebarComponent visible={this.state.itemsSidebarVisible} onClose={this.closeSidebar}
          character={this.state.character} silentLoad={this.state.silentLoading}
          reduce={this.reduce} increase={this.increase}/>
        </Pane>
        return <div className="App">
          {appPane}
        </div> 
      }
  }
}

export default App;
