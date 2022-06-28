require("../datasource");

const { MuseumDataProvider } = require("../datasource");

const assert = require("assert").strict;

let sampleMuseumData = require("../datasource/offline");
const { isPropertiesEqual } = require("./testUtils");

let MSObj = new MuseumDataProvider();

describe("All test cases of Museum Data", function () {
  before((done) => {
    //Before test we wait for data store to be loaded
    setTimeout(() => {
      done();
    }, 5000);
  });
  

  // loadMuseumData().then()

  it("getDataByDate() both Object should be equal", function (done) {
    let result = MSObj.getDataByDate(1404198000008);
    assert.equal(isPropertiesEqual(result, sampleMuseumData[0]), true);
    done();
  });

  it("getDataByDate() both Object should not be equal", function (done) {
    let result = MSObj.getDataByDate(1) || {};
    assert.equal(isPropertiesEqual(result, sampleMuseumData[0]), false);
    done();
  });
});
