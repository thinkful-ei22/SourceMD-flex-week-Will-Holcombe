import  { Mongo } from 'meteor/mongo';

const Stories = new Mongo.Collection("stories");

export default Stories;