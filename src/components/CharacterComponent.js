import React from 'react';
import { Heading, Spinner } from "evergreen-ui";

export default class CapitalComponent extends React.Component {

  render() {
      return <div>
        <Heading size={800}>{this.props.data.name}</Heading>
        <br />
        <img src={this.props.data.imageUrl} className="Character-photo"/>
      </div>
  };
}