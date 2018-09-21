import React from "react";
//will allow us to create a query
import gql from 'graphql-tag';
//connect query to component
import { graphql, withApollo } from 'react-apollo';

import StoryForm from  './StoryForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import { userInfo } from "os";
//prop in our value called hi  has value hello level up
const App = ({ loading, stories, client, user }) => { 
   
    if (loading) return null;
    return ( 
    <div>  
        { user._id ? (
             <button onClick={() => { 
                 Meteor.logout();
                    client.resetStore();
            }}>Logout</button>

        ) : ( 
            <div>
            <RegisterForm client={client}/>
            <LoginForm client={client}/>
            </div>
        )}
       
    <h1>Welcome to SourceMD</h1>

    <StoryForm />
        <ul>
            {stories.map(story => (
                <li key={story._id}>
                            {story.headline}
                 </li>
            ))}
        </ul>
    </div>
    );
};

//with-apollo and client={client} allow us to reset the store whenever a user
//logs in or out

//hiQuery is where our refetch is coming from
//refetch refetches this query
//what goes in the query below determines whats available as props data
//just make sure you also add it up top as a prop
const storiesQuery = gql`
query Stories {
    
    stories {
        _id
        headline
    }
    user {
        _id
    }
 
}
`;
//assign our props that come into our component
export default graphql(storiesQuery, { 
    props: ({data}) => ({ ...data})
})(withApollo(App));

//export default App = () => <h1>Hello</h1>;

//refetch={refetch}