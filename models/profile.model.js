const Schema = mongoose.Schema;

const profileSchema = new Schema({
    fullName:{
        type: String,
        required: false,
        unique: false,
        default: "New Teammate"
    },
    nickName: {
        type: String,
        required: false,
        unique: false,
        default: "New_Teammate"
    },
    avatar: {
        type: String,
        required: false,
        default: "../../images/icons/user-regular.png"
    },
    jobTitles: [{
        type: String,
        required: false,
        default: "Not specified..."
    }],
    usualWorkHoursStart:{
        type: String,
        required: false,
        default: "Not specified..."
    },
    usualWorkHoursEnd: {
        type: String,
        required: false,
        default: "Not specified..."
    },
    email:{
        type: String,
        required: false,
        default: "Not specified..."
    },
    phone:{
        type: String,
        required: false,
        default: "Not specified..."
    },
    location:{
        type: String,
        required: false,
        default: "Not specified..."
    }
}, {
    timestamps: true
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;


/*

    */