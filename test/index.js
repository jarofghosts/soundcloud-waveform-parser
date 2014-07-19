var assert = require('assert')
  , path = require('path')
  , fs = require('fs')

var parser = require('../index.js')

var expected = require('./data.json')

parser(
    fs.readFileSync(path.join(__dirname, '5qiYxFbUNrRO_m.png'))
  , testResult
)

function testResult(err, result) {
  assert.deepEqual(result, expected)
}
