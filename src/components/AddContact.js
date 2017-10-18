import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class AddContact extends Component {
    addContact(newContact){
        axios.request({
            method:'post',
            url: 'http://localhost:3000/api/lbbs',
            data: newContact
        })
        .then(response => {
            this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }
    
    onSubmit(e){
        e.preventDefault();
        const newContact ={
            name: this.refs.name.value,
            rating: this.refs.rating.value,
            phone: this.refs.phone.value,
            likes: this.refs.likes.value,
            notes: this.refs.notes.value,
        };
        this.addContact(newContact);
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn blue" to="/">Back</Link>
            
                <div className="grey darken-3 grey-text lighten-1">
                    <h1>Add Contact</h1>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="input-field">
                            <input type="text" name="name" ref="name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input type="number" name="rating" ref="rating" />
                            <label htmlFor="rating">Rating</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="phone" ref="phone" />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field">
                            <textarea name="likes" ref="likes"></textarea>
                            <label htmlFor="likes">Likes</label>
                        </div>
                        <div className="input-field">
                            <textarea name="notes" ref="notes"></textarea>
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <input type="submit" value="Save" className="btn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default AddContact;