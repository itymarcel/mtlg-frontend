import React, { Component } from "react";
import MaterialList from '../../components/materials/materiallist';

class MaterialListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      materialUuids: props.materialUuids,
      materials: [] 
    };
  }

  async componentDidMount() {
    try {
      const settings = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ materialUuids: this.state.materialUuids })
      };
      // const response = await fetch(`http://localhost:4000/materials/getmaterials`, settings);
      const response = await fetch(`https://mtlg.herokuapp.com/`, settings);
      console.log('response: ', response);
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