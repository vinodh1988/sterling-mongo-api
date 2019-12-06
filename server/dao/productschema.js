var mongoose=require('mongoose');

var products=mongoose.model('products',new mongoose.Schema(
    {
        productkey: Number,
        name:String,
        brand:String,
        price:Number,
        stock: Number,
        description:String,
        warranty: String
      
     }
),
'products');

module.exports=products;