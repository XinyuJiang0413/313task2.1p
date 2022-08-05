var express = require("express");
var app = module.exports = express();
var router = require("./controller/router");
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(express.static("../"))


app.get("/", router.openhomepage);
app.post("/welcomeuser", router.welcomeuser);




app.listen(8888);
console.log('port:' + 8888);