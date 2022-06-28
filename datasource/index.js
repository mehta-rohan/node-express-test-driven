const { loadMuseumData } = require("./online");

let museumdata = [];

(async () => {
  await loadMuseumData()
    .then((data) => {
      museumdata = data;
    })
    .catch(() => {
      museumdata = require("./offline");
    });
})();

function converDateIntoStartOfTheDay(date) {
  var tempDate = new Date(parseInt(date)).setUTCHours(0, 0, 0, 0);
  return new Date(tempDate).toISOString().split("Z")[0];
}

class MuseumData {
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
