class Validator{
    validateVisitCount(req,res,next){
        let { date } = req.query || {};
        if(!date || !Number.isInteger(parseInt(date))){
            res.status(400).send({message:'Invalid date'});  
        }
        else{
            next();
        }  
    }
}

module.exports = {Validator}