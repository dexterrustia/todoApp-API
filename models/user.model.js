const mongodb = require('mongoose');

const UserShema = mongodb.Schema({
    userName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    }
});

module.exports = mongodb.model('User',UserShema)
