import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditContact extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            rating:'',
            phone:'',
            likes:'',
            notes:''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentWillMount(){
        this.getContactDetails();
    }

    getContactDetails(){
        let contactId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/lbbs/${contactId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                rating: response.data.rating,
                phone: response.data.phone,
                likes: response.data.likes,
                notes: response.data.notes
            });
        })
        .catch(err => console.log(err));
    }

    editContact(updatedContact){
        axios.request({
            method:'put',
            url: `http://localhost:3000/api/lbbs/${this.state.id}`,
            data: updatedContact
        })
        .then(response => {
            this.props.history.push('/');
        })
        .catch(err => console.log(err));
    }
    
    onSubmit(e){
        e.preventDefault();
        const updatedContact ={
            name: this.refs.name.value,
            rating: this.refs.rating.value,
            phone: this.refs.phone.value,
            likes: this.refs.likes.value,
            notes: this.refs.notes.value,
        };
        this.editContact(updatedContact);
    }

    handleInputChange(e){
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
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
                            <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleInputChange} />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="input-field">
                            <input type="number" name="rating" ref="rating" value={this.state.rating} onChange={this.handleInputChange} />
                            <label htmlFor="rating">Rating</label>
                        </div>
                        <div className="input-field">
                            <input type="text" name="phone" ref="phone" value={this.state.phone} onChange={this.handleInputChange} />
                            <label htmlFor="phone">Phone</label>
                        </div>
                        <div className="input-field">
                            <textarea name="likes" ref="likes" value={this.state.likes} onChange={this.handleInputChange} ></textarea>
                            <label htmlFor="likes">Likes</label>
                        </div>
                        <div className="input-field">
                            <textarea name="notes" ref="notes" value={this.state.notes} onChange={this.handleInputChange}></textarea>
                            <label htmlFor="notes">Notes</label>
                        </div>
                        <input type="submit" value="Save" className="btn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default EditContact;