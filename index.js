const schedule = require("node-schedule");

const makeDirectories = require("./utils/makeDirectories");
const getDate = require("./utils/getDate");
const getTime = require("./utils/getTime");
const screenshotAndSave = require("./utils/screenshotAndSave");

const { cronTime, stocks } = require("./config");

makeDirectories(stocks);

function main() {
  console.log(`[${getTime()}] Beginning screenshot saving on ${getDate()}`);
  screenshotAndSave(stocks);
}

main();

schedule.scheduleJob(cronTime, main);
