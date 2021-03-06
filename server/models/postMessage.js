import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// This creates the schema
const postSchema = new Schema({
    title: 'string',
    message: 'string',
    creator: 'string',
    tags: [String],
    selectedFile: 'string',
    likeCount: {
        type: 'Number',
        default: 0
    },
    createdAt: {
        type: 'Date',
        default: new Date()
    }
});

// create the model using the schema
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
