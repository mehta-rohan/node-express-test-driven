
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

  module.exports = {converDateIntoStartOfTheDay,monthNames}