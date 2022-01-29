const mongoose = require("mongoose");



const bookSchema = mongoose.Schema({
    title:{
        type: String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    description:{
        type: String,
    },
    author:{
        type:String,
        require:true
    },
    publisher:{
        type:String,
    },
    pages:{
        type:String,
    },
    image_url:{
        type:String
    },
    buy_url:{
        type:String
    }
    // create_date:{
    //     type:Date,
    //     default:Date.now
    // }
});


const Books = module.exports = mongoose.model('Book',bookSchema);


//Get book

module.exports.getBooks = (callback) => {
    const data =Books.find(callback);
    return data;
}

module.exports.getBookById = (id, callback) => {
    Books.findById(id,callback);
}

module.exports.addBook = (book,callback) => {
    Books.create(book,callback);
}

