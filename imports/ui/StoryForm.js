import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

//just id bc not going to be using returned ifo from this Q
//query language
const createStory = gql`
mutation createStory($headline: String!) {
    createStory(headline: $headline){ 
    _id
    }
}
`;
class StoryForm extends Component {
    constructor(props){
        super(props);
    }
submitForm = () => {
console.log(this.headline.value);
this.props.createStory({
    variables: {
        headline: this.headline.value
    }
})
.then(({data}) => {
//console.log(data, 'From Story Form Component');
//this.props.refetch();
}).catch(error =>{
console.log(error);
})
};
    render(){
     return (
         <div>
             <input type="text" ref={input => (this.headline = input)}/>
             <button onClick={this.submitForm }>Submit</button>
         </div>
     );
    }
}

export default graphql(createStory, {
    name: "createStory",
    options: {
        refetchQueries: ['Stories']
    }
})(StoryForm);