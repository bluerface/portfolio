const express = require('express');
const fs = require('fs');
const marked = require('marked');
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  data = {markdown: marked('# Marked in browser\n\nRendered by **marked**.')}
  res.render('index.ejs', data)
});


app.listen(3000, () => {
  console.log('App listening on port 3000');
});
