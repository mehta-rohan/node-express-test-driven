const {Visitor} = require('../../controller');
let visitorOBJ = new Visitor();
let router = require('express').Router();

router.get('/visitors',visitorOBJ.countVisitor);

module.exports = router;
