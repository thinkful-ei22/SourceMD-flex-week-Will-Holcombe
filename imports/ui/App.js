import React from "react";
//will allow us to create a query
import gql from 'graphql-tag';
//connect query to component
import { graphql } from 'react-apollo';
import StoryForm from  './StoryForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
//prop in our value called hi  has value hello level up
const App = ({ loading, stories, refetch }) => { 
    if (loading) return null;
    return ( 
    <div>  
    <h1>Welcome to SourceMD</h1>
    <RegisterForm />
    <LoginForm />
    <button onClick={() => Meteor.logout()}>Logout</button>
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

//hiQuery is where our refetch is coming from
//refetch refetches this query
const storiesQuery = gql`
query Stories {
    hi
    stories {
        _id
        headline
    }
}
`;
//assign our props that come into our component
export default graphql(storiesQuery, { 
    props: ({data}) => ({ ...data})
})(App);

//export default App = () => <h1>Hello</h1>;

//refetch={refetch}