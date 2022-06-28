let http = require('http');
async function loadMuseumData() {
    var options = {
      method: "GET",
      hostname: "data.lacity.org",
      path: "/resource/trxm-jn3c.json",
      headers: {},
    };
  
    return new Promise((resolve, reject) => {
      var req = http.request(options, function (res) {
        var chunks = [];
  
        res.on("data", function (chunk) {
          chunks.push(chunk);
        });
  
        res.on("end", function (chunk) {
          var body = Buffer.concat(chunks);
          resolve(JSON.parse(body));
        });
  
        res.on("error", function (error) {
          console.log("here", error);
          resolve(require("./offline"));
        });
      });
  
      req.end();
  
      req.on("error", function (err) {
        console.log(err);
        resolve(require("./offline"));
      });
    });
  }

  module.exports = {loadMuseumData}