import React, { Component } from "react";

class MaterialList extends Component {
  constructor() {
    super();
    this.state = { materials: [] };
  }
  async componentDidMount() {
    try {
      const response = await fetch(`https://mtlg.herokuapp.com/`);
      const response_json = await response.json();
      console.log(response_json);
      this.setState({ materials : response_json });
    } catch (error) {
      console.log(error);
    }    
  }

  render() {
    if (!this.state.materials) {
      console.log(this.state);
    } else {
      console.log(this.state);
      return (
        <ul class="material-list">
          {this.state.materials.map(function(d, idx){
         return (<li key={idx}>{d.name}</li>)
       })}
        </ul>
      )
    }
  }
}

export default MaterialList;