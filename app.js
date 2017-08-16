var express = require('express');
var app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('public'));

app.get('/template', (req, res) => {
  var time = Date();
  res.render('temp', { title: 'Hey', message: 'Hello there!', time: time});
});
app.get('/', (req, res) => {
  res.send('Hello home page');
});
app.get('/dynamic', (req, res) => {
  var lis = '';
  for (var i=0; i<10; i++) {
    lis = lis + '<li>coding</li>';
  }
  var time = Date();
  var output = `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      Hello, Dynamic!!!
      <ul>
        ${lis}
      </ul>
      ${time}
    </body>
  </html>`;
  res.send(output)
});
app.get('/route', (req, res) => {
  res.send('Hello Router, <img src="book1.jpg">');
});
app.get('/login', (req, res) => {
  res.send('<h1>Login please</h1>');
});


app.listen(3000, () => {
  console.log('Express app litening on port 3000!');
  console.log(global);
});