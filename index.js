var pngParse = require('pngparse').parse

module.exports = parseWaveform

function parseWaveform(data, cb) {

  pngParse(data, interpretWaveform)

  function interpretWaveform(err, png) {
    if(err) return cb(err)

    var result = new Array(1800)
      , visited = 0
      , val = 140
      , idx = 0

    for(var i = 1, l = png.data.length; i < l; i += 2, idx++) {
      if(idx === 1800) {
        idx = 0
        --val
      }

      if(!png.data[i] && isNaN(result[idx])) {
        result[idx] = val / 140
        if(++visited === 1800) break
      }
    }

    cb(null, result)
  }
}
