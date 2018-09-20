import React from "react";
import { Meteor } from "meteor/meteor";
import{ render } from "react-dom";
//makes graphql available in our actual application
import { ApolloProvider } from 'react-apollo';
import { ApolloLink, from } from 'apollo-link';
import { ApolloClient } from "apollo-client";
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from "../../ui/App";



//this would in a normal instance be a normal url
//this is where we actually connect 
const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl("graphql")
});
//get Apollo to talk to Meteor Accounts
const authLink = new ApolloLink((operation, forward) => {
const token = Accounts._storedLoginToken();
operation.setContext(() => ({
    headers: {
        'meteor-login-token': token
    }
}));
return forward(operation);
});

const cache = new InMemoryCache();

const client = new ApolloClient({
    link: from([authLink, httpLink]),
    cache
});
//now our application is aware of the apollo server
//

const ApolloApp = () => (
    <ApolloProvider client={client}>
        <App />

    </ApolloProvider>
);

//function that has a callback
//where do we want to render it?
Meteor.startup(() => {
    render(<ApolloApp />, document.getElementById("app"))
});

//id for root