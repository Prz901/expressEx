const app = require("./src/custom-express");
const http = require("http");

const engine = require("consolidate");
const bodyParse = require("body-parser");

app.set("views", __dirname + "/views"); // general config
app.engine("html", engine.mustache);
app.set("view engine", "html");

app.use(
  bodyParse.urlencoded({
    extended: true
  })
);
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
