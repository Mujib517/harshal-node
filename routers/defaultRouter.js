let express=require('express');

let defaultRouter=express.Router();

//httpget
defaultRouter.get('/',function(req,res){
    res.send("Express API");
});

defaultRouter.get('/health',function(req,res){
    res.send("Up");
});

module.exports=defaultRouter;
