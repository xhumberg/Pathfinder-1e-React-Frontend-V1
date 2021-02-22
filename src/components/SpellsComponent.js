import React from 'react';
import { Pane, Heading, Text, Checkbox, Popover, Button } from "evergreen-ui";

export default class SpellsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return <div>
        <Pane display="flex" width="90%" background="yellowTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
            <Text>The following is sample text:</Text>
        </Pane>
        <Pane display="flex" width="90%" background="yellowTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
          <Heading>3rd Level Spells (3/day)</Heading>
        </Pane>
        <Pane display="flex" width="90%" background="yellowTint" borderRadius={3} margin="auto" alignItems="flex-end" alignItems="center" padding={10} justifyContent="center">
          <Button>Cast</Button>
          <Popover
            bringFocusInside
            content={
              <Pane
                width={600}
                paddingX={20}
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Text padding={10}>Casting Time: 1 standard action<br />Components: V, S, F/DF (a miniature collection plate)<br />Range: close (25 ft. + 5 ft./2 levels)<br />Target: one humanoid creature<br />Duration: 1 round/level<br />Saving Throw: Will negates; Spell Resistance: yes<br /><br />This spell makes a creature more charitable, compelling it to aid others rather than use violence. An affected creature practices nonviolent combat behaviors according to the following list of priorities, beginning with the first priority. The subject continues to perform a priority until he can no longer fulfill its demands (at which point he moves to the next priority) or until the spell ends, whichever comes first.<br /><br />1st Priority: Heal injured creatures within 30 feet, beginning with the closest creatures and using whatever methods the subject has at hand (including potions, spells, and so on).<br /><br />2nd Priority: The subject gives his weapon away to the nearest creature within 30 feet who will accept it. If no creature accepts the weapon, the subject drops the weapon on the ground.<br /><br />3rd Priority: Cast beneficial spells and/or use beneficial magic items (including potions, wands, and so on) on creatures within 30 feet, starting with the closest creatures.<br /><br />4th Priority: The subject gives away his non-worn possessions—the contents of a backpack or similar item count as one item each, as does the container itself—to creatures within 30 feet. If no creature accepts the items, the subject drops the items on the ground.<br /><br />5th Priority: The subject gives away his remaining possessions (including his armor, boots, cloak, and so on) to creatures within 30 feet. If no creature accepts the items, the subject drops them on the ground.<br /><br />If the subject fulfills all five priorities, the spell effect ends. The subject cannot attack or take attacks of opportunity, but can defend himself as normal. If the subject is attacked, the spell’s effect immediately ends.</Text>
              </Pane>
            }
            >
                <Button height={40}>Charitable Impulse (DC 19)</Button>
            </Popover>
        </Pane>
    </div>
  };
}