import React, { Component } from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

//just id bc not going to be using returned ifo from this Q
//query language
const createComment = gql`
mutation createComment($content: String!, $storyId: String!) {
    createComment(content: $content, storyId: $storyId){ 
    _id
    }
}
`;
class CommentForm extends Component {
    constructor(props){
        super(props);
    }
submitForm = () => {
//console.log(this.headline.value);
this.props.createComment({
    variables: {
        content: this.content.value,
        storyId: this.props.storyId
    }
})
// .then(({data}) => {
// //console.log(data, 'From Comment Form Component');
// //this.props.refetch();
// })
.catch(error =>{
console.log(error);
})
};
    render(){
     return (
         <div>
             <input type="text" ref={input => (this.content = input)}/>
             <button onClick={this.submitForm }>Submit</button>
         </div>
     );
    }
}

export default graphql(createComment, {
    name: "createComment",
})(CommentForm);