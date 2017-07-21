var express=require('express');
var app=express();
var http=require('http').Server(app);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
}).listen(3000);

app.use(express.static('public'))

