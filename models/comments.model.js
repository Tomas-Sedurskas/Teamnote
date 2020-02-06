const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentBodySchema = new Schema({
    comment: {
        type: String,
        required: true
    },
    commenter: {
        type: String,
        required: true
    }
});

const commentSchema = new Schema({
    comment: [{ commentBodySchema }],
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});


const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;