const fs = require("fs");

function mkdirIfMissing(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

module.exports = arr => {
  mkdirIfMissing("./screenshots");

  for (x of arr) {
    mkdirIfMissing(`./screenshots/${x.toUpperCase()}`);
  }
};
