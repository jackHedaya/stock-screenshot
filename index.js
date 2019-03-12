const schedule = require("node-schedule");

const makeDirectories = require("./utils/makeDirectories");
const getDate = require("./utils/getDate");
const screenshotAndSave = require("./utils/screenshotAndSave");

const { cronTime, stocks } = require("./config");

makeDirectories(stocks);

screenshotAndSave(stocks);

schedule.scheduleJob(cronTime, function() {
  screenshotAndSave(stocks);
});

console.log(`Beginning screenshot saving on ${getDate()}`);