const { getDataByDate, MuseumData } = require("../datasource");
const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

let MSObj = new MuseumData();

const fillTemplate = (data, ignore) => {
  let templateResponse = {
    month: monthNames[new Date(data.month).getMonth()],
    year: new Date(data.month).getFullYear(),
  };

  if(ignore && data[ignore]>=0){
    templateResponse['ignored'] = { museum: ignore, visitors: parseInt(data[ignore] )}
  }

  let sum = 0;
  let max = -1,
    maxMusem = "";
  let low = Infinity,
    miniMusem = "";
  for (const iterator of Object.keys(data)) {
    if (iterator !== "month" && iterator !== ignore) {
      sum += parseInt(data[iterator]);
      if (max < parseInt(data[iterator])) {
        max = parseInt(data[iterator]);
        maxMusem = iterator;
      }
      if (low > parseInt(data[iterator])) {
        low = parseInt(data[iterator]);
        miniMusem = iterator;
      }
    }
  }
  templateResponse["highest"] = {
    museum: maxMusem,
    visitors: max,
  };

  templateResponse["lowest"] = { museum: miniMusem, visitors: low };
  templateResponse["total"] = sum;
//   console.log(templateResponse, data);
  return templateResponse;
};


class Visitor {
    countVisitor(req, res){
        let { date, ignore } = req.query || {};

        if(!date){
          res.status(400).end();  
        }else{
          let data = MSObj.getDataByDate(date);
          let result = data ? fillTemplate(data, ignore) :{};
          res.send(result);
        }
        
        
      };
}


module.exports = {Visitor};
