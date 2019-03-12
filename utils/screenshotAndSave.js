const Nightmare = require("nightmare");

const getDate = require("./getDate");

module.exports = stocks => (stocks.constructor === Array ? stocks.forEach(screenshotAndSave) : screenshotAndSave);

function screenshotAndSave(s) {
  return Nightmare()
    .goto(`https://finance.yahoo.com/chart/${s}`)
    .viewport(1300, 700)
    .wait(3000)
    .click('[class="P(0)"]')
    .wait(2000)
    .screenshot(`screenshots/${s.toUpperCase()}/${getDate()}.png`)
    .end()
    .then(_ => console.log(`${s.toUpperCase()} screenshot saved`))
    .catch(x => {
      console.error(x);
    });
}
