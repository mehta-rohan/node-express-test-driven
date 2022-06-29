const {Visitor} = require('../../controller');
const { Validator } = require('../data-validator');
let router = require('express').Router();

let visitor = new Visitor();

//data validator
let validator = new Validator();

// controller for /api/visitor
router.get('/visitors',validator.validateVisitCount,visitor.countVisitor);

module.exports = router;
