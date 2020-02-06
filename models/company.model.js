const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const companySchema = new Schema({
    company_title: {
        type: String,
        required: true,
        unique: true
    },
    projects:[{
        type: Schema.Types.ObjectId,
        ref: 'Project'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Profile',
        required: false
    },
    team: [{
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }]
}, {
    timestamps: true
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;