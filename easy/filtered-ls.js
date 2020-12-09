const fs = require('fs')
const path = require('path')

const directory = process.argv[2]
const exten = '.' + process.argv[3]

fs.readdir(directory, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === exten) {
      console.log(file)
    }
  })
})