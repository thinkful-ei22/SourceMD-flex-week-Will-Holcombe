import Comments from "./comments";




export default {
    Query: {
        Comments(obj, args, { userId }) {
            //console.log(userId);
            return  Comments.find({
                userId
            }).fetch() || {};
        } 
    },
    Mutation: {
        createComment(obj, { content }, { userId }) {
             console.log('got here');
            // console.log(headline);
            const commentId = Comments.insert({
                
                content,
                userId
            });
            return Stories.findOne(commentId)
        }
    }
};
Comments.insert({ content: "This site rocks!"});