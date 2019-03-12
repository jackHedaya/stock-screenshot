const schedule = require("node-schedule")

const makeDirectories = require("./utils/makeDirectories");
const getDate = require("./utils/getDate");
const screenshotAndSave = require("./utils/screenshotAndSave");

const stocks = ["roku", "sq", "pcg", "nio", "bzun"];

makeDirectories(stocks);

screenshotAndSave(stocks);

schedule.scheduleJob("0 30 6 * * *", function() {
  screenshotAndSave(stocks);
});

console.log(`Beginning screenshot saving on ${getDate()}`);