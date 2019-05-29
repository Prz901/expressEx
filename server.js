const app = require("./src/custom-express");
const http = require("http");

const engine = require("consolidate");

app.set("views", __dirname + "/views"); // general config
app.engine("html", engine.mustache);
app.set("view engine", "html");

//app.use()
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
