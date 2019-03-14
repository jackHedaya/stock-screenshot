# stock-screenshot

A tool to help with scheduled screenshots of Yahoo Finance stock graphs. Not really meant to be used externally, but if its useful to you then go for it!

## Contributing
+ `$ git clone https://github.com/jackHedaya/stock-screenshot`
+ `$ cd stock-screenshot && yarn`

## Usage
First, you're going to need to clone stock-screenshot.
1. `$ git clone https://github.com/jackHedaya/stock-screenshot`

stock-screenshot should be ran with <a href="https://github.com/Unitech/pm2">pm2</a> so the scheduler can be ran in the background as a daemon. 

2. yarn: `$ yarn global add pm2`<br>
   npm: `$ npm i -g pm2`

You can set stocks and scheduled <a href="https://github.com/node-schedule/node-schedule#cron-style-scheduling">cron time</a> in `config.js`.

3. **config.js**<br>
```js
module.exports = {
   stocks: ["AMZN", "AAPL", "NFLX"],  // Set tickers here
   cronTime: "0 30 18 * * *" // Set cronTime here`
}
```

You can now have pm2 run the app.

4. `$ pm2 start index.js --name stock-screenshot` or `$ yarn deploy`


## Dependencies
+ <a href="https://github.com/GoogleChrome/puppeteer">Puppeteer</a>
+ <a href="https://github.com/node-schedule/node-schedule">Node Schedule</a>
