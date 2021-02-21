import React from 'react';
import { Heading } from "evergreen-ui";

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
       const url = "http://localhost:8080/character/prosopa";
       const response = await fetch(url);
       const data = await response.json();
       this.setState({name: data.name, imageUrl: data.imageUrl, loading: false})
  }

  render() {
    return <div>
      <Heading size={900}>{this.state.name}</Heading>
      <br />
      <img src={this.state.imageUrl} className="Character-photo"/>
    </div>
  };
}