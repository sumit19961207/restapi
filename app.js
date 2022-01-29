
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config(); 

Genre = require("./models/genres");
Book = require("./models/book");
Film = require("./models/film");

const app = express();

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, access-control-allow-origin");
    next();
})


mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology: true,
}).then(()=>{console.log("**DB Connected")})
.catch((err)=>console.log("DB Connection ERR =>", err));

//config

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// route

app.get('/api/genres', (req,res)=>{
    Genre.getGenres((err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});
app.get('/api/genres/:_id', (req,res)=>{
    Genre.getGenresById(req.params._id,(err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});


//to add data
app.post('/api/genres', (req,res)=>{
    const genre = req.body;
    Genre.addGenres(genre,(err,genres)=>{
        if(err){
            throw err;
        }
        res.json(genres);
    });
});
// how to update data

app.put('/api/genres/:_id', (req,res)=>{
    var id = req.params._id;
    const genre = req.body;
    Genre.updateGenres(id,genre,{},(err,genres)=>{
        if(err){
            throw Error;
        }
        res.json(genres);
    })
});

app.get('/api/books', (req,res)=>{
    Book.getBooks((err,books)=>{
        console.log(books);
        if(err){
            throw err;
        }
        res.json(books);
        
    })
});



app.get('/api/books/:_id', (req,res)=>{
    Book.getBookById(req.params._id,(err,book)=>{
        if(err){
            throw err;
        }
        res.json(book);
        
    })
});

//Add book data
app.post('/api/books', (req,res)=>{
    const book = req.body;
    Book.addBook(book,(err,books)=>{
        if(err){
            throw err;
        }
        res.json(books);
    })
})


app.get('/api/films', (req,res)=>{
    Film.getFilm((err,films)=>{
        console.log(films);
        if(err){
            throw err;
        }
        // res.json(books);
        res.send(films);
        
    })
});

app.get('/api/films/:_id', (req,res)=>{
    Film.getFilmById(req.params._id,(err,films)=>{
        if(err){
            throw err;
        }
        res.json(films);
    })
});



//add film data
app.post("/api/films", (req,res)=>{
    const film = req.body;
    console.log("here");
    Film.addFilms(film,(err,films)=>{
        if(err){
            throw err;
        }
        res.json(films)
    })
})


//port
const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`App is running on port ${port}`));

