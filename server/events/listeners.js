
var events = require('events');
var mylistener= new events.EventEmitter();


mylistener.on("server-start",function(data){
    console.log("Background process related to server started");
    console.log(data);
});

mylistener.on("dbconnect",function(data){
    console.log("Background process releted to db started");
    console.log(data);
})


module.exports=mylistener;