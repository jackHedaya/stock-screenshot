const puppeteer = require("puppeteer");

const getDate = require("./getDate");

module.exports = stocks => (stocks.constructor === Array ? stocks.forEach(screenshotAndSave) : screenshotAndSave);

function screenshotAndSave(s) {
  return (async () => {
    const browser = await puppeteer.launch({
      headless: true,
      timeout: 0,
      defaultViewport: { width: 1300, height: 700 }
    });

    const page = await browser.newPage();
    await page.goto(`https://finance.yahoo.com/chart/${s}`, { timeout: 0 });

    await page.waitForSelector("button[class='P(0)']", { timeout: 0 });
    await page.click("button[class='P(0)']");

    await page.waitFor(1000);
    await page.screenshot({ path: `screenshots/${s.toUpperCase()}/${getDate()}.png` });

    await browser.close();
  })()
    .then(_ => console.log(`${s.toUpperCase()} screenshot saved`))
    .catch(console.error);
}
