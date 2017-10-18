import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ContactDetails extends Component {
    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentWillMount(){
        this.getContact();
    }

    getContact(){
        let contactId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/lbbs/${contactId}`)
        .then(response => {
            this.setState({details: response.data})
        })
        .catch(err => console.log(err));
    }

    onDelete(){
        let contactId = this.state.details.id;
        axios.delete(`http://localhost:3000/api/lbbs/${contactId}`)
        .then(response => {
            this.props.history.push('/')
        })
        .catch(err => console.log(err));
    }

    render(){
        return(
            <div>
                <br />
                <Link className="btn blue" to="/">Back</Link>
                
                <h3 className="grey-text text-lighten-1">
                <img src="" alt={this.state.details.name} />
                    {' '}{this.state.details.name}
                    <a className="btn-floating btn-large orange right">{this.state.details.rating}</a>
                </h3>
                <ul className="collection">
                    <li className="collection-item">
                        {this.state.details.phone}
                    </li>
                    <li className="collection-item">
                        Likes: {this.state.details.likes}
                    </li>
                    <li className="collection-item">
                        Notes: {this.state.details.notes}
                    </li>
                </ul>
                <Link className="btn" to={`/contacts/edit/${this.state.details.id}`}>Edit</Link>

                <button onClick={this.onDelete.bind(this)} className="btn red right">Delete</button>
           </div>
        )
    }
}

export default ContactDetails;