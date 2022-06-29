let http = require('http');
async function loadMuseumData() {
    var options = {
      method: "GET",
      hostname: "data.lacity.org",
      path: "/resource/trxm-jn3c.json",
      headers: {},
    };
  
    // fetching data from source once 
    return new Promise((resolve, reject) => {
      var req = http.request(options, function (res) {
        var chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        //loading data from API and resolve the error
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          resolve(JSON.parse(body));
        });
  
        //loading data from localfile in case of failure
        res.on("error", function (error) {
          console.log("here", error);
          resolve(require("./offline"));
        });
      });
  
      req.end();
  
      //loading data from localfile in case of failure
      req.on("error", function (err) {
        console.log(err);
        resolve(require("./offline"));
      });
    });
  }

  module.exports = {loadMuseumData}