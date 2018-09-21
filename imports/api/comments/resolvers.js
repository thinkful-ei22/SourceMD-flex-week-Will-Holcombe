import Comments from "./comments";
//import Stories from "../stories/stories";



export default {
     Query: {
        comments(obj, { storyId }) {
            //console.log(userId);
            return  Comments.find({
                storyId
            }).fetch();
        } 
    },
    Mutation: {
        createComment(obj, { content, storyId }) {
             console.log('got here');
            // console.log(headline);
            const commentId = Comments.insert({
                
                content,
                storyId
            });
            return Comments.findOne(commentId)
        }
    }
};
// Comments.insert({ content: "4 out of 5 Doctors love this site!", userId: "xjdiwnkd"});

 
// const res = Comments.find({}).fetch();
// console.log(res);
