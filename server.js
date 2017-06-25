require('babel-register')({
    presets: ['react']
});
const express = require('express')
const app = express()
var React = require('react')
var ReactDOMServer = require('react-dom/server')
var Component = require('./Component.jsx')

app.use(express.static('public'));
app.get('/', function (req, res) {
  var props = {title : 'lol'};
  var test = ReactDOMServer.renderToString(
      React.createElement(Component,props)
      );
  res.send(test)
})

app.listen(8080, function () {
  console.log('listening on port 8080..')
})