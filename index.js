var express=require('express');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
});

io.on("connection",function(socket){
   console.log('a user is connected');
   socket.on('chat message',function(message){
        io.emit('chat message',message);
   });
   socket.on('disconnect',function(){
      console.log('user is now disconnected');
   });
});

http.listen(3000,function(){
   console.log("port 3000 connected");
});

app.use(express.static('public'))

