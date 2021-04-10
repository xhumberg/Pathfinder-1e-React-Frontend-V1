import React from 'react';
import { Pane, Heading, Strong } from "evergreen-ui";

export default class WeaponComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const title = "Masterwork Heavy Crossbow";
    const special = "Range 120 ft."
    const damage = "1d10 P | 19-20x2"
    const attackMod = "+6";

    return <div>
            <div>
                <Pane display="flex" padding={16} background="tintRed" borderRadius={10} width="950px" margin="auto">
                    <Pane flex = {1} alignItems="center" display="flex" padding={5}>
                        <Heading size={800}>{title}</Heading>
                    </Pane>
                    <Pane alignItems="center" justifyContent="center">
                        <Strong size={800} marginRight={16}>{special}</Strong>
                    </Pane>
                </Pane>
            </div>
            <div>
                <Strong size={1000}>{attackMod} ({damage})</Strong>
            </div>
        </div>
  };
}