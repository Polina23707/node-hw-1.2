#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers');
const { boolean, command } = require('yargs');

const date = new Date();
const argv = yargs(hideBin(process.argv))
.option('year', {
  alias: 'y',
  type: 'boolean',
  description: 'Show year'
})
.option('month', {
  alias: 'm',
  type: 'boolean',
  description: 'Show month'
})
.option('date', {
  alias: 'd',
  type: 'boolean',
  description: 'Show date'
})
.command('current', 'show date', (yargs) => {
  console.log(yargs.argv)
  if (yargs.argv.year) {
    console.log(date.getUTCFullYear());
  } else if (yargs.argv.month) {
    console.log(date.getMonth() + 1);
  } else if (yargs.argv.date) {
    console.log(date.getDate());
  } else {
    console.log(date);
  }
})
.command('add', 'add date', (yargs) => {
  if (yargs.argv.year) {
    console.log(date.getUTCFullYear() + yargs.argv._[1]);
  } else if (yargs.argv.month) {
    console.log(date.getMonth() + 1 + yargs.argv._[1]);
  } else if (yargs.argv.date) {
    console.log(date.getDate() + yargs.argv._[1]);
  } else {
    console.log(date);
  }
})
.command('sub', 'sub date', (yargs) => {
  if (yargs.argv.year) {
    console.log(date.getUTCFullYear() - yargs.argv._[1]);
  } else if (yargs.argv.month) {
    console.log(date.getMonth() + 1 - yargs.argv._[1]);
  } else if (yargs.argv.date) {
    console.log(date.getDate() - yargs.argv._[1]);
  } else {
    console.log(date);
  }
})
.parse();