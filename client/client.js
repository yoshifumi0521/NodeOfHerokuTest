
$(function() {

   //ソケットのオブジェクトを取得。herokuに置いたサーバーに接続した。
   var socket = io.connect("http://localhost:3000/");
   console.log(socket);
   socket.on('connect', function(){
     
     console.log("クライアント接続");

   })

















});







