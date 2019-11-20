#!/usr/bin/env node

const pack = require('./package.json');
console.log(process.argv);
var fs = require('fs');
console.log('Incrementing build number...');

const position = {
  major: 0,
  minor: 1,
  patch: 2,
};

try {
  // eslint-disable-next-line handle-callback-err
  fs.readFile('./package.json', function(err, content) {
    const type = process.argv[2] || 'patch';

    pack.version = pack.version
      .split('.')
      .map((item, k) => Number(item) + (k === position[type] ? 1 : 0))
      .reduce((a, b) => `${a}.${b}`);
    fs.writeFile('./package.json', JSON.stringify(pack), function(err) {
      if (err) {
        throw err;
      }
      console.log('Current build number: ' + pack.version);
    });
  });
} catch (e) {
  console.log(e);
}
