const express = require('express');
const bodyParser = require('body-parser');
const cors  = require('cors');
const mysql = require('mysql');


const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'As28092005',
    database: 'trydb'
}); 


db.connect((err)=> {
    if(err){
        throw err;
    }
    console.log("Mysql conected")
})


app.get('/createdb', (req, res)=> {
    let sql = "INSERT INTO movie_review (movieName, movieReview) VALUES ('inceprion', 'good movie') ;";
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        }
        res.send("databasecreated...")
    })
})

app.post('/api/insertdata', (req, res) => {
    
    const movieName = req.body.movieName

    const sql = "INSERT INTO movie_review (movieName, MovieReview) VALUES (?,?)"
    db.query(sql, [movieName, movieReview], (err, result) => {
        if(err) {
            throw err;
        }

    })
})


app.listen(8000)

console.log('Succcses')