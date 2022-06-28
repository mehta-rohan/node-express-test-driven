const {Visitor} = require('../../controller');
let visitorOBJ = new Visitor();
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

router.get('/visitors',validator,visitorOBJ.countVisitor);

module.exports = router;
