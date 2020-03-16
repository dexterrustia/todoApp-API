const mongodb = require('mongoose');

const UserProfileSchema = mongodb.Schema({
    userID: {
        type: String,
        require: true
    },
    fullName: {
        type: String,
        require: true
    },
    birthdate: {
        type: String,
        require: true
    }
});