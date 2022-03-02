// Code by Wys#0001 || https://github.com/Wys2

// Variables globales
const functions = require("./assets/functions.js")
const fs = require('fs');
const chalk = require("chalk")
const pupeteer = require("puppeteer")

// Startup
var args = process.argv.slice(2);
if(args[0] == "-t"){
  console.log("Debug mode activated")
}

fs.readFile(`${__dirname}/assets/askabor.txt`, function(err, data) {
    if(err) throw err;
    let arr = data.toString().replace(/\r\n/g,'\n').split('\n');
    for(let i of arr) {
        console.log(i);
    }
});

//