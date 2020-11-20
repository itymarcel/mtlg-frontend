import React, { Component } from "react";
let data;

class MaterialList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    try {
      const response = await fetch(`https://mtlg.herokuapp.com/`, {mode: 'cors', headers: { 'Content-Type': 'application/json' } });
      const json = await response.json();
      this.setState({ data: json });
      console.log(json);
    } catch (error) {
      console.log(error);
    }    
  }

  render() {
    return (
      <div>{this.state.data}</div>
    )
  }
}

export default MaterialList;