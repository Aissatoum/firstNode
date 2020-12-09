const fs = require('fs')
const file = process.argv[2]

fs.readFile(file, function (err, contents) {
  if (err) {
    return console.log(err)
  }
  const newlines  = contents.toString().split('\n').length - 1
  console.log(newlines );
})