var express =require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send({greeting:'Hello RectxNode.js'})
});

module.exports=router;