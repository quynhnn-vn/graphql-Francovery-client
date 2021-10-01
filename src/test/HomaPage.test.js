const assert = require("assert");

const webdriver = require("selenium-webdriver"),
  By = webdriver.By,
  until = webdriver.until;

let driver;

const getMapChart = async () => {
  try {
    await driver.get("http://localhost:3000/");
    const element = await driver
    .wait(
      until.elementIsVisible(driver.findElement(By.id("map-container"))),
      5000
    )
    if (element) return true;
  } catch (err) {
    console.log(err);
  }
}

describe("HomePage component : ", () => {
    beforeEach(() => {
      driver = new webdriver.Builder()
        .withCapabilities(webdriver.Capabilities.firefox())
        .build();
    });
  
    afterEach(() => {
      driver.quit();
    });

    it("displays MapChart - check if element exits", async () => {
      return getMapChart().then((element) => {
        assert.equal(element, true);
      });
    })
})