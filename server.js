const express = require('express');
const fs = require('fs');
const marked = require('marked');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  data = {}
  var path = __dirname + '/data/markdown.md'
  var markdown = fs.readFileSync(path, 'utf8')
  data.markdown = marked(markdown);
  res.render('index.ejs', data)
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
