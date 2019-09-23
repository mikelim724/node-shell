let pwd = require('./pwd');
let ls = require('./ls');
const cat = require('./cat')
const curl = require('./curl')


process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim().split(' ')[0]
  const argument = data.toString().trim().split(' ').slice(1)

  process.stdout.write('You typed: ' + cmd);
  if (cmd === 'pwd') {
    process.stdout.write(`\n`);
    pwd();
  }
  if (cmd === 'ls') {
    process.stdout.write(`\n`);
    ls();
  }
  if(cmd=== 'cat') {
    process.stdout.write('\n')
    cat(argument[0])
  }
  if(cmd=== 'curl') {
    process.stdout.write('\n')
    curl(argument[0])
  }
  process.stdout.write('\nprompt > ');
});

function done(output) {
  process.stdout.write('\n' + output)
  process.stdout.write('\nprompt > ')
}
