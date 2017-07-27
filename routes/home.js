var express = require("express");
var fs = require('fs');
var router = express.Router();

//home
router.get("/", function(req, res){
  res.render("home/main");
});

router.get("/public/resources/images", function(req, res){
  fs.readFile('Brand.png', function(err, data){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

module.exports = router;
