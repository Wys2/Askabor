// Code by Wys#0001 || https://github.com/Wys2

// Variables globales
const functions = require("./assets/functions.js")
const fs = require('fs');
const puppeteer = require("puppeteer")

// Startup
var args = process.argv.slice(2);
if(args[0] == "-t"){
  console.log("Debug mode activated")
}

fs.readFile(`${__dirname}/assets/askabor.txt`, function(err, data) {
    if(err) throw err;
    let arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    for(let e of arr) {
        console.log(e);
    }
});

//Start a new page
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla', {
    architecture: 'Win64; x64',
    mobile: false,
    model: 'NT',
    platform: 'Windows NT',
    platformVersion: '10.0',
  });

  page.on('console', (msg) => {
    if(args[0] == "-t") console.log('Log :', msg.text());
  })

  await page.goto('https://tiktok.com', {
    waitUntil: 'networkidle2',
  });

})();

