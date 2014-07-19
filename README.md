soundcloud-waveform-parser
====

[![Build Status](http://img.shields.io/travis/jarofghosts/soundcloud-waveform-parser.svg?style=flat)](https://travis-ci.org/jarofghosts/soundcloud-waveform-parser)
[![npm install](http://img.shields.io/npm/dm/soundcloud-waveform-parser.svg?style=flat)](https://www.npmjs.org/package/soundcloud-waveform-parser)

parse [soundcloud waveform PNGs](https://developers.soundcloud.com/blog/waveforms-let-s-talk-about-them)
into [waveform.js](http://waveformjs.org/) compatible data.

## usage

```js
var fs = require('fs')

var parser = require('soundcloud-waveform-parser')

fs.readFile('soundcloud-waveform.png', parseWaveform)

function parseWaveform(err, data) {
  parser(data, displayResults)
}

function displayResults(err, data) {
  console.log(data) // ta-da!
}
```

## license

MIT
