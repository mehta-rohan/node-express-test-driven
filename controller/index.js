const {MuseumDataProvider } = require("../datasource");

let MSObj = new MuseumDataProvider();


// Visitor class providing couting function
class Visitor {
  countVisitor(req, res) {
    let { date, ignore } = req.query || {};
    let data = MSObj.getDataByDate(date);
    let result = data ? MSObj.fillTemplate(data, ignore) : {};
    res.send(result);
  }
}

module.exports = { Visitor };