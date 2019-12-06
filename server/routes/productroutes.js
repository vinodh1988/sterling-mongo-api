var products=require('../dao/productschema');

var route=require('express').Router();

route.post("/products",function(request,response){
    products.insertMany(request.body, function(err,data){
        if(err)
          response.sendStatus(500);

        response.sendStatus(200);
    })
})

route.put("/products/:productkey",function(request,response){
    products.updateMany({productkey: request.params.productkey},
        {$set:request.body}, function(err,data){
        if(err)
          response.sendStatus(500);

        response.sendStatus(200);
    })
})

route.delete("/products/:productkey",function(request,response){
    products.remove({productkey: request.params.productkey}, function(err,data){
        if(err)
          response.sendStatus(500);

        response.sendStatus(200);
    })
})

route.get("/products",function(request,response){
       products.find({},{_id:0,__v:0},function(err,data){
           if(err)
               response.status(500);
           else
               response.json(data);
       })
});

module.exports=route;