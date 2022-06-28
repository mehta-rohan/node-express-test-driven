let http = require('http');
async function loadMuseumData() {
    var options = {
      method: "GET",
      hostname: "data.lacity.org",
      path: "/resource/trxm-jn3c.json",
      headers: {},
    };
  
    return new Promise((reject, resolve) => {
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
          reject({ error: "not able to load data", status_code: 1003 });
        });
      });
  
      req.end();
  
      req.on("error", function (err) {
      //   console.log(err);
        reject({ error: "not able to load data", status_code: 1003 });
      });
    });
  }

  module.exports = {loadMuseumData}