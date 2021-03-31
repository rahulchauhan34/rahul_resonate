var express = require("express");
var app = express();
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/img"));

///var port = 8000;
//app.listen(port);
//console.log("server listening on port :" + port);
//Defining the port for the Server
const PORT=process.env.PORT||5000;

//Code for allocating the listen for the server with the associated message
app.listen(PORT,()=>{console.log(`Server started on Port ${PORT}`)});   