import React, { Component } from 'react';
import axios from 'axios';
import ContactItem from './ContactItem';

class Contacts extends Component{
    constructor(){
        super();
        this.state= {
            contacts: []
        }
    }

    componentWillMount(){
        this.getContacts();
    }

    getContacts(){
        axios.get('http://localhost:3000/api/lbbs')
            .then(response => {
                this.setState({contacts: response.data}, () => {
                    //console.log(this.state);
                })
            })
            .catch(err => console.log(err));
    }
    
    render(){
        const contactItems = this.state.contacts.map((contact, i) => {
            return(
                <ContactItem key={contact.id} item={contact} />
            )
        })
        return (
            <div className="grey darken-3 grey-text lighten-1">
                <h1>Contacts</h1>
                <ul className="collection">
                    {contactItems}
                </ul>
            </div>
        )
    }
}

export default Contacts;