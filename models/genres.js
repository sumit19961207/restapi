const mongoose = require("mongoose");


//Genre Schema

const genreSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    create_date:{
        type: Date,
        default:Date.now
    }
});


var Genre = module.exports = mongoose.model('Genre',genreSchema);

module.exports.getGenres = (callback) => {
     Genre.find(callback);
}

module.exports.getGenresById = (Id, callback) =>{
     Genre.findById(Id, callback);
}

module.exports.addGenres= (genre,Callback) =>{
    Genre.create(genre,Callback)
}