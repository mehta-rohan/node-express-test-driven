//During the test the env variable is set to test
process.env.NODE_ENV = "test";
require("../datasource");
//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");
const { template, templateWithoutIgnore, isPropertiesEqual } = require("./testUtils");
chai.should();
const assert = require("assert").strict;
  
chai.use(chaiHttp);
//Our parent block
describe("Museum Visitor Service", () => {
  before((done) => {
    //Before test we wait for data store to be loaded
    setTimeout(() => {
      done();
    }, 5000);
  });

  describe("/GET visitor count", () => {
    it("it should GET vistors data from DB with ignore avila_adobe", (done) => {
      chai
        .request(server)
        .get("/api/visitors?date=1404198000000&ignore=avila_adobe")
        .end((err, res) => {
          res.should.have.status(200);
          assert.equal(isPropertiesEqual(res.body, template), false);
          done();
        });
    });

    it("it should GET vistors data from DB without ignore avila_adobe", (done) => {
        chai
          .request(server)
          .get("/api/visitors?date=1404198000000&ignore=avila_adobe1")
          .end((err, res) => {
            res.should.have.status(200);
            assert.equal(isPropertiesEqual(res.body, templateWithoutIgnore), false);
            done();
          });
      });

      it("it should GET 400", (done) => {
        chai
          .request(server)
          .get("/api/visitors")
          .end((err, res) => {
            res.should.have.status(400);
            done();
          });
      });
  });
});
