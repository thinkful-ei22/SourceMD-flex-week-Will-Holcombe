import { StoriesSchema } from '../../api/stories/stories.graphql';
import  StoriesResolvers  from '../../api/stories/resolvers';
//allows separate files for mutations, schema, and queries
import merge from 'lodash/merge';
//apollo replaces that api part
//mutations replace meteor methods/ node routes
import { createApolloServer } from 'meteor/apollo';
import { makeExecutableSchema } from 'graphql-tools';
//import { CLIENT_RENEG_LIMIT } from 'tls';


//stories returning an array of Story, defined as
//id and headline
//hi

const testSchema =  `
type Query {


hi: String
stories: [Story]
}
`;

const testResolver = {
    Query: {
        hi() {
            return "Welcome to SourceMD";
        }
    },
   
};

const resolvers = merge(testResolver, StoriesResolvers);
//console.log(StoriesResolvers);
//console.log('Here', resolvers); 

const typeDefs = [
    testSchema,
    StoriesSchema
];


const schema = makeExecutableSchema({
    typeDefs, 
    resolvers
});
createApolloServer({schema});