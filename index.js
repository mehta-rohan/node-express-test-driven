let app = require("express");
let server = app();
let vistorService = require("./routes/visitor");
require('./datasource');
server.use("/api", vistorService);

server.listen(3030, () => {
    console.log("server listening at 3030");
});

module.exports = server; // for testing