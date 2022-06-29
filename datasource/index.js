const { loadMuseumData } = require("./online");
const { monthNames, converDateIntoStartOfTheDay } = require("./utils");

let museumdata = [];


// Immediate Invoke function to load data from API or local file
(async () => {
  await loadMuseumData()
    .then((data) => {
      museumdata = data;
    }).catch(error =>{
      console.log('error',error)}
    )
})();
class MuseumDataProvider {
  fillTemplate(data, ignore) {

    let sum = 0;
    let max = -1,
      maxMusem = "";
    let low = Infinity,
      miniMusem = "";

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

    // calculating total, max, min in single loop
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
    return templateResponse;
  }

  getDataByDate(date) {
    let startOfTheDayDate = converDateIntoStartOfTheDay(date);
    for (let index = 0; index < museumdata.length; index++) {
      const element = museumdata[index];
      //return when we found the element
      if (element.month === startOfTheDayDate) {
        return element;
      }
    }
    return null;
  }
}

module.exports = { MuseumDataProvider };
