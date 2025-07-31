var express = require('express');
var app = express();

// Respond with "changed not" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('humanshu the super super great');
});

// Listen on port 3000 by default
app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;
i
