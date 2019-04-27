var express = require("express");

app = express();

var PORT = process.env.PORT || 1234;

app.get("/", function(req, res) {
  res.json(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, function() {
  console.log(`Started and running on port: ${PORT}`);
});
