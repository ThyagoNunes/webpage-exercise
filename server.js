const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data")

server.use(express.static("public"));       /* CSS */
server.set("view engine", "njk");          /* SET ENGINE FOR HTML */

nunjucks.configure("views", {               /* CONFIGURE NUNJUCKS */
  express: server
});

server.get("/", function (req, res) {
  return res.render("about");               /* RENDER INDEX */
});

server.get("/content", function (req, res) {

  return res.render("content", { items: videos });
});

server.listen(process.env.PORT || 3000);


