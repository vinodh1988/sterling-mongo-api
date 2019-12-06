var students=require("../dao/studentschema");

var route=require('express').Router();

route.get("/all",function(request,response){
    students.find({},{_id:0},function(err,data){
        if(err)
          response.sendStatus(500);
        else
          response.json(data);
    })
})

route.get("/all/:pattern",function(request,response){
     
    students.find({name:{'$regex' :request.params.pattern, '$options' : 'i'}},
    {_id:0},function(err,data){
        if(err)
          response.sendStatus(500);
        else
          response.json(data);
    })
});

module.exports=route;