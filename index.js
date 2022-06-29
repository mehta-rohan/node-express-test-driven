let app = require("express");
let server = app();
let vistorService = require("./routes/visitor");
const APP_PORT = 3030;

//initialize data load
require('./datasource');

// Route
server.use("/api", vistorService);

server.listen(APP_PORT, () => {
    console.log("server listening at ",APP_PORT);
});

module.exports = server; // for api testing