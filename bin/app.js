#!/usr/bin/env node

const chalk = require('chalk')
const yargs = require('yargs')
const buildPlugins = require('../src/index.js')

yargs.version('1.1.0')
 
console.log('printing s single file:',yargs.argv.single);
console.log(yargs.argv.base);
buildPlugins(yargs.argv.base || './components', yargs.argv.single, yargs.argv.single, yargs.argv.edit)

yargs.argv