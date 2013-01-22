
var http = require('http');

var port = process.env.PORT || 2000;
var app = http.createServer(function (req, res) {

   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');


}).listen(port, "0.0.0.0");

console.log('Server running');


var io = require('socket.io').listen(app);

//Socket.ioの設定。long-pollingで対応する。 
io.configure(function () {

   //HerokuではWebSocketがまだサポートされていない？ので、以下の設定が必要 
   io.set("transports", ["xhr-polling"]);
   io.set("polling duration", 10); 

   // socket.ioのログ出力を抑制する
   //io.set('log level', 1);

});


io.sockets.on('connection', function (socket) {

   //socket.ioの処理はここから書いていく。
   console.log("サーバーサイドのソケット接続成功！"); 
   console.log(socket.id);
   //クライアントからmessageイベントが受信した時
   socket.on('login',function(data){
      
      console.log("あるユーザーがログインした");
      //ログインしてる人に送る。
      //socket.broadcast.json.emit('login_message',{text: "誰かがログインしました。"+ socket.id });

   
   });

   //クライアントがメッセージ送信したときのイベント。メッセージの送信先にメッセージをおくる。
   socket.on("message",function(data){
   
      console.log("メッセージの送信");
      var session_id = data["session_id"];
      var receive_user_id = data["partner_id"];
      var content = data["content"];
      var status = data["status"]

      //session_idが同じクライアントにメッセージをおくる。
      socket.broadcast.json.emit("session_"+ session_id + "_user_" + receive_user_id,{content: content,status: status});

       
   
   
   });


   //クライアントが、セッションをパスしたときのイベント。
   socket.on("pass_message",function(data){
   
      console.log("パスのメッセージを送信");
      var review = data["review"];
      var image = data["image"];
      var receive_user_id = data["partner_id"];
      var session_id = data["session_id"];
      
      console.log("aaaaaa");
      socket.broadcast.json.emit("pass_session_"+session_id+"_user_"+receive_user_id,{review: review,image: image});  


   
   });
















});









