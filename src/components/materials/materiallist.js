import React, { Component } from "react";
import MaterialItem from './materialitem';
import './materiallist.scss';

class MaterialList extends Component {
  constructor(props) {
    super(props);
    this.state = { materials: props.materials };
    console.log('props ', props);
  }

  render() {
    return (
      <div className="material-list">
        {
          this.state.materials.map((d, idx) => {
            console.log('data in materiallist render: ', d);
            return (<MaterialItem data={d} index={idx} />)  
          })
        }
      </div>
    )
  }
}

export default MaterialList;
