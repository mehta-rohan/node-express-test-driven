const { loadMuseumData } = require("./online");

let museumdata = [];

(async () => {
  await loadMuseumData()
    .then((data) => {
      museumdata = data;
    }).catch(error =>{
      console.log('error',error)}
    )
})();

function converDateIntoStartOfTheDay(date) {
  var tempDate = new Date(parseInt(date)).setUTCHours(0, 0, 0, 0);
  return new Date(tempDate).toISOString().split("Z")[0];
}

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

class MuseumData {
  fillTemplate(data, ignore) {
    let templateResponse = {
      month: monthNames[new Date(data.month).getMonth()],
      year: new Date(data.month).getFullYear(),
    };

    if (ignore && data[ignore] >= 0) {
      templateResponse["ignored"] = {
        museum: ignore,
        visitors: parseInt(data[ignore]),
      };
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
  }

  getDataByDate(date) {
    let startOfTheDayDate = converDateIntoStartOfTheDay(date);
    for (let index = 0; index < museumdata.length; index++) {
      const element = museumdata[index];
      // console.log(startOfTheDayDate,);

      if (element.month === startOfTheDayDate) {
        return element;
      }
    }
  }
}

module.exports = { MuseumData };
