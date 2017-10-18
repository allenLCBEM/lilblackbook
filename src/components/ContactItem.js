import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ContactItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            item:props.item
        }
    }
    render(){
        return(
            <li className="collection-item">
                <Link to={ `/contacts/${this.state.item.id}`} >{this.state.item.name}</Link>
            </li>
        )
    }
}

export default ContactItem;