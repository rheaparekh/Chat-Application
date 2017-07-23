var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

io.on("connection",function(socket){
   io.emit('chat message','new user is connected');
   socket.on('chat message',function(message){
        io.emit('chat message',message);
   });
   socket.on('disconnect',function(){
        io.emit('chat message',"user disconnected");
   });
});

http.listen(3000,function(){
   console.log("port 3000 connected");
});

app.use(express.static('public'))

