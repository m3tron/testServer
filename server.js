var express = require("express");

app = express();

var PORT = 1234;

app.listen(PORT, function() {
  console.log(`Started and running on port: ${PORT}`);
});
