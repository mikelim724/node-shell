// process.stdout.write('prompt > ');

// process.stdin.on('data', data => {
//   const cmd = data.toString().trim();
//   let path = require('path');

//   if (cmd === 'pwd') {
//     process.stdout.write(`\n` + __dirname);
//   }
//   process.stdout.write('\nprompt > ');
// });

module.exports = function() {
  process.stdout.write(__dirname); //can also use process.cwd() instead of __dirname
};
