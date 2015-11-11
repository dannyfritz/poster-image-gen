var fs = require('fs')
var express = require('express')
var tempfile = require('tempfile')
var renderPage = require('phantom-render').render
var handlebars = require('handlebars')

var templateHtml = fs.readFileSync('./index.hb', 'utf8')
var renderHtml = handlebars.compile(templateHtml)

var app = express()
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Listening at http://%s:%s', host, port)
})

app.get('/', function (req, res, next) {
  var photo = req.query.photo
  var message = req.query.message
  var options = {photo: photo, message: message}
  var tempfilename = tempfile('.png')
  console.log('creating file!', options)
  renderPage(renderHtml(options),
    tempfilename,
    {format: 'png', quality: 100, width: 500, height: 500},
    function (err) {
      console.log('sending file!', options)
      res.sendFile(tempfilename)
    })
});
