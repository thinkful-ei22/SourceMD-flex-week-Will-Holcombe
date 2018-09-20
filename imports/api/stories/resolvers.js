import Stories from "./stories";


// Stories.insert({
//     headline: 'Recommendations for dementia patients',
//     description: 'A new study from Singapore on Sundown suggests...',
//     author: 'Gwen McGuill MD',
//     createdAt: '4:45pm September 20, 2018'
// });


const res = Stories.find({}).fetch();
console.log(res);

export default {
    Query: {
        stories() {
            return  Stories.find({}).fetch();
        } 
    },
    Mutation: {
        createStory(obj, { headline }, context) {
             console.log('got here');
            // console.log(headline);
            const storyId = Stories.insert({
                headline
            });
            return Stories.findOne(storyId)
        }
    }
};

//return b/c our schema states we want to return the story
//{ headline } was args

// console.log('got here');
// console.log(headline);
// const storyId = Stories.insert({
//     headline: "New PMT Notice"
// });


// [
//     { 
//     _id: "Allergy Alert",
//     headline: "Recall on Oreos sold between September 10 and September 20 2018"
//     },
//     { 
//         _id: "New CPAP Machine Protocol",
//         headline: "Use FDA approved cleaner"
//         }
// ];