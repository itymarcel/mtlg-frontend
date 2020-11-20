import React, { Component } from "react";

class MaterialList extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }
  async componentDidMount() {
    try {
      const response = await fetch(`https://mtlg.herokuapp.com/`).then(response => response.json());
      this.setState({ data: response.toString() });
      console.log(response.toString());
    } catch (error) {
      console.log(error);
    }    
  }

  render() {
    return (
      <div class="material-list">
        {this.state.data}
      </div>
    )
  }
}

export default MaterialList;