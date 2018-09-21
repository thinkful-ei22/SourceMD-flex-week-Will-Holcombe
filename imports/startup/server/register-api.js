import { StoriesSchema } from '../../api/stories/stories.and.comments.graphql';
import  StoriesResolvers  from '../../api/stories/resolvers';
//import { CommentsSchema } from '../../api/comments/comments.graphql';
import  CommentsResolvers  from '../../api/comments/resolvers';

//allows separate files for mutations, schema, and queries
import merge from 'lodash/merge';
//apollo replaces that api part
//mutations replace meteor methods/ node routes
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
import { UsersSchema } from '../../api/users/user.graphql';
import UsersResolvers from '../../api/users/resolvers';
//import { CLIENT_RENEG_LIMIT } from 'tls';


//stories returning an array of Story, defined as
//id and headline

//hiiiiii
//CommentsResolvers,  CommentsSchema,
const resolvers = merge(

    StoriesResolvers,
    CommentsResolvers,
    UsersResolvers
    
    );

    //console.log(StoriesResolvers);
//console.log('Here', resolvers); 
const typeDefs = [
    StoriesSchema,
    UsersSchema
   
];


const schema = makeExecutableSchema({
    typeDefs, 
    resolvers
  
});

createApolloServer({schema});




// const testResolver = {
//     Query: {
//         hi() {
//             return "Welcome to SourceMD";
//         }
//     },
   
// };

// const testSchema =  `
// type Query {

// hi: String
// stories: [Story]

// }
// `;