class Validator{
    validateVisitCount(req,res,next){
        let { date } = req.query || {};
        if(!date){
            res.status(400).end();  
        }
        else{
            next();
        }  
    }
}

module.exports = {Validator}