// function toggleDarkMode() {
//     const body = document.body;
//     body.classList.toggle("light-mode");
// }

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const mongoose = require("mongoose");
const app = express();

// Set View's\
app.set('views', './views');
app.set('view engine', 'ejs');


// Static Files
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use('/css', express.static(__dirname + 'public/css/style.css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/images'))


// Navigation
app.get("/", (req, res) => {
    res.render(__dirname + '/views/index');
});

// Heroku port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server has started!");
});