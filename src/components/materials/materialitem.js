import React, { Component } from "react";
import './materialitem.scss';

class MaterialItem extends Component {
  constructor(props) {
    super(props);
    console.log('material item: ', props);
    this.state = { 
      data: props.data,
      index: props.index
    };
  }

  render() {
    if (!this.state) {
      return null;
    }
    console.log('material item: ', this.state.data);
    console.log('material item: ', this.state.index);
    console.log('material item: ', this.state.data.notes);
    console.log('material item: ', this.state.data.datasheet_url);
    return (
      <div key="{this.state.index + 1}" className="material-item">
        <h1>{this.state.data.name}</h1>
        <div className="material-description">{this.state.data.description}</div>
        <div className='material-information-headline'>Notes</div>
        <div className='material-notes'>{this.state.data.notes}</div>
        {this.state.data.datasheet_url && (<div className='material-ds'><a href="{this.state.data.datasheet_url}">Link to datasheet</a></div>)}
        {this.state.data.technicalinfosheet_url && (<div className='material-ds'><a href="{this.state.data.technicalinfosheet_url}">Link to technical info sheet</a></div>)}
        <div className="material-uuid">{this.state.data.uuid}</div>
      </div>
    )
  }
}

export default MaterialItem;
