let pwd = require('./pwd');
let ls = require('./ls');
const fs = require('fs');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();
  let path = require('path');

  process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    process.stdout.write(`\n`);
    pwd();
  }
  if (cmd === 'ls') {
    process.stdout.write(`\n`);
    ls();
  }
  process.stdout.write('\nprompt > ');
});
