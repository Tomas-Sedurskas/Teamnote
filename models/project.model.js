const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    commentBody: {
        type: String,
        required: true
    },
    commenter: {
        type: String,
        required: true
    },
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})

const taskSchema = new Schema({
    taskTitle: {
       type: String,
       required: true
    },
    taskDescription: {
        type: String,
        required: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    },
    assignees: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    status: {
        type: String,
        required: true
    },
    attachedFiles: [{
        type: String,
        require: false,
        unique: true
    }],
    comments: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
    
}, {
    timestamps: true
});


const projectSchema = new Schema({
    projectTitle: {
        type: String,
        required: true,
        unique: true
    },
    projectLogo: {
        type: String,
        required: false,
        unique: true
    },
    projectDescription:{
        type: String,
        required: false
    },
    projectLink: {
        type: String,
        required: false
    },
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }],
    tasks: [taskSchema],
    status: {
        type: String,
        required: true
    },
    projectLead: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    }
}, {
    timestamps: true
});


const Project = mongoose.model('Project', projectSchema);

module.exports = Project;