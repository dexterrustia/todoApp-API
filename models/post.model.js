const mongodb = require('mongoose');

const PostSchema = mongodb.Schema({
    title: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    },
    data: {
        type : Date,
        require : Date.now()
    }
});

module.exports = mongodb.model('Posts',PostSchema);