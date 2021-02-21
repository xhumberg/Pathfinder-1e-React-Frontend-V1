import React from 'react';
import { Heading, Spinner } from "evergreen-ui";

export default class CapitalComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      loading: true
    }
  } 

  async componentDidMount() {
       const url = "https://test-pathfinder-sheet.herokuapp.com/character/prosopa";
       const response = await fetch(url);
       const data = await response.json();
       this.setState({name: data.name, imageUrl: data.imageUrl, loading: false})
  }

  render() {
    if (this.state.loading) {
      return <div><Spinner /></div>
    } else {
      return <div>
        <Heading size={800}>{this.state.name}</Heading>
        <br />
        <img src={this.state.imageUrl} className="Character-photo"/>
      </div>
    }
  };
}