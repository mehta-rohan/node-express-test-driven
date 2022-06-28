const {MuseumData } = require("../datasource");

let MSObj = new MuseumData();
class Visitor {
  countVisitor(req, res) {
    let { date, ignore } = req.query || {};
    let data = MSObj.getDataByDate(date);
    let result = data ? MSObj.fillTemplate(data, ignore) : {};
    res.send(result);
  }
}

module.exports = { Visitor };
