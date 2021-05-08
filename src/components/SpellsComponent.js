import React from 'react';
import { Pane, Heading } from "evergreen-ui";
import ClickForDescriptionSpellComponent from './ClickForDescriptionSpellComponent';
import SpellsOfLevelComponent from './SpellsOfLevelComponent'

export default class SpellsComponent extends React.Component {

  render() {
    if (this.props.character.spellcasting.length > 0) {
      var spellcasting = this.props.character.spellcasting[0];
      var castingName = spellcasting.name;
      var castingType = spellcasting.type;
      var casterLevel = spellcasting.casterLevel;
      var concentration = spellcasting.concentration;

      var spellcastingInformation = spellcasting.spellsPerLevel.map((level) => {
        var preppedSpellList = level.spellsPrepped.map((spell) => <ClickForDescriptionSpellComponent name={spell.name} description={spell.description}/>);
        var castSpellList = level.spellsCast.map((spell) => <ClickForDescriptionSpellComponent name={spell.name} description={spell.description} cast={true}/>);
        return (<SpellsOfLevelComponent levelString={level.levelString} perDay={level.perDay} preppedSpellList={preppedSpellList} castSpellList={castSpellList}/>)
      })

      return <div>
        <Pane width="950px" background="yellowTint" borderRadius={3} margin="auto" alignItems="center" padding={5} justifyContent="center">
          <Heading size={700}>{castingName} {castingType}</Heading>
          <Heading size={100} marginTop="0px">Caster Level: {casterLevel}; Concentration +{concentration}</Heading>
          <hr width="250px"/>
          {spellcastingInformation}
        </Pane>
      </div>
    } else {
      return <div>No.</div>
    }
  };
}