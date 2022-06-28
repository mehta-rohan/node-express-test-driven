const {Visitor} = require('../../controller');
let visitor = new Visitor();
let router = require('express').Router();

function validator(req,res,next){
    let { date } = req.query || {};
    if(!date){
        res.status(400).end();  
    }
    else{
        next();
    }  
}

router.get('/visitors',validator,visitor.countVisitor);

module.exports = router;
