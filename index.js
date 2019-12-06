var mongoose=require("mongoose");
var express=require("express");
var productsroute=require("./server/routes/productroutes");
var studentsroute=require("./server/routes/studentroutes");
var publisher=require("./server/events/listeners");
var bodyParser=require("body-parser");

var app=express();





mongoose.connect('mongodb://localhost/sterling');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongo db connection is open");
  publisher.emit("dbconnect","MONGO APP -4000")
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use(bodyParser.json());
app.use("/productapi",productsroute);
app.use("/students",studentsroute);

app.listen("4000",function(request,response){
        console.log("Server started and running @4000");
        publisher.emit("server-start","MONGO APP -4000")
});
