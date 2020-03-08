const mongodb = require('mongoose');

const TodoSchema = mongodb.Schema({
    userID: {
        type : String,
        require : true
    },
    title: {
        type : String,
        require : true
    },
    description: {
        type : String,
        require : true
    },
    level: {
        type : String,
        required : true
    }, 
    status: {
        type : String,
        require : true
    }, 
    dueDate: {
        type : String,
        require : true
    }
});

module.exports = mongodb.model('Todo',TodoSchema);