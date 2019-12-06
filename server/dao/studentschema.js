var mongoose=require('mongoose');

var students=mongoose.model('students',new mongoose.Schema(
    {
       name:String  
     }
),
'students');

module.exports=students;