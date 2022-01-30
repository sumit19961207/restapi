const mongoose = require("mongoose");


const filmSchema = mongoose.Schema({
    filmName : {
        type: String
    },
    actorName :{
        type:String
    }
});

const Film = module.exports = mongoose.model("film",filmSchema);

module.exports.getFilm = (callback) => {
    Film.find(callback);
}

module.exports.getFilmById = (Id, callBack) =>{
    Film.findById(Id, callBack);
}

module.exports.addFilms = (film, callback) =>{
    Film.create(film,callback);
}

module.exports.updateFilm = (id,film,option,callBack) =>{
    const query = {_id:id};
    const update = {
        filmName: film.filmName,
        actorName:film.actorName
    }
    Film.findOneAndUpdate(query,film,update,callBack);
}

