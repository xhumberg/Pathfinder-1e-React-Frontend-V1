import CapitalComponent from "./components/CapitalComponent";
import CharacterComponent from "./components/CharacterComponent";
import EffectsPopoverComponent from "./components/EffectsPopoverComponent";
import AbilitiesComponent from "./components/AbilitiesComponent";
import './App.css';
import {Pane, Position} from "evergreen-ui";

function App() {

  return (
      <div className="App">
        <Pane display="flex" justifyContent="space-between">
          <Pane display="flex" width="80%" background="tint2" borderRadius={3} margin="auto" alignItems="flex-end">
            <Pane flex={1} alignItems="center" display="flex" padding={10}>
              <CharacterComponent/>
            </Pane>
            <Pane alignItems="center" height="100%" padding={10} width="100%">
              <AbilitiesComponent/>
              <EffectsPopoverComponent/>
            </Pane>
          </Pane>
       </Pane>
      </div>
  );
}

export default App;
