import React from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Contacts from './Contacts';
import ContactDetails from './ContactDetails';
import AddContact from './AddContact';
import EditContact from './EditContact';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Contacts} />
            <Route exact path='/contacts/add' component={AddContact} />
            <Route exact path='/contacts/edit/:id' component={EditContact} />
            <Route exact path='/contacts/:id' component={ContactDetails} />
        </Switch>
    </main>


)

export default Main;