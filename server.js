var express = require("express");


//port
var PORT = process.env.PORT || 8080;

//starting an app
var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//handlebars set
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//importing routes
const routes = require('./controllers/burgers_controller.js');

app.use(routes);

//starting the server
app.listen(PORT, function() {
   
    console.log("Server listening on: PORT" + PORT);
  });