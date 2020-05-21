const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.set('view engine', 'html');
server.use(express.static("public"))

nunjucks.configure('views', {
  express:server
})

server.get("/", function(req, res){
  return res.render("about");
})

server.get("/content", function(req, res){
  return res.render("content");
})

server.listen(1000,function(){
  console.log("server is running")
})