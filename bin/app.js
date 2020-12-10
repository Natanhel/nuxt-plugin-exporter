#!/usr/bin/env node

const chalk = require('chalk')
const yargs = require('yargs')
const buildPlugins = require('../src/index.js')

yargs.version('1.1.0')

// if (yargs.argv.single) {    
console.log('printing s single file:',yargs.argv.single);
buildPlugins(yargs.argv.single)
// }

yargs.argv