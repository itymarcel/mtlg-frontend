import React, { Component } from "react";
import MaterialList from '../../components/materials/materiallist';

class MaterialListContainer extends Component {
  constructor() {
    super();
    this.state = { 
      loading: true,
      materials: [] 
    };
  }

  async componentDidMount() {
    try {
      // const response = await fetch(`http://localhost:4000`);
      const response = await fetch(`https://mtlg.herokuapp.com/`);
      const response_json = await response.json();
      console.log(response_json);
      this.setState({ loading: false, materials : response_json });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (!this.state.loading) {
      return (
        <MaterialList materials={this.state.materials} />
      )
    } else {
      return <div>Loading ...</div>
    }
  }
}

export default MaterialListContainer;