import React, { Component } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class DropdownMain extends Component {
   constructor(props){
       super(props);
   }
   
    render() {

        return (
            <div className="dropdown-container">
                <Dropdown options={this.props.options} onChange={this.props.onSelect} value={this.props.defaultOption} placeholder="Select an option" />
            </div>
        )
    }
}
