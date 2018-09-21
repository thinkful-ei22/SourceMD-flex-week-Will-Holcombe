import React, { Component } from 'react';
import { Accounts } from "meteor/accounts-base";
import { withApollo } from 'react-apollo';



export default class LoginForm extends Component {
    
registerUser = (e) => {
    e.preventDefault();
    console.log('Logged In');
    Meteor.loginWithPassword(
        this.email.value, this.password.value, 
        error => {
            if(!error){
                this.props.client.resetStore();
            }
        console.log(error);
    });

};

    render() {
        return ( 
        <form onSubmit={this.registerUser}>
        <input type="email" ref={input => (this.email = input)} />
        
        <input type="password" ref={input => (this.password = input)} />
        
        <button type="submit">Login</button>
        </form>
        );
    }
}

