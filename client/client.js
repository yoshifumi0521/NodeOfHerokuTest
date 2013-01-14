
$(function() {

   //ソケットのオブジェクトを取得。herokuに置いたサーバーに接続した。
   var socket = io.connect("http://rocky-lake-5452.herokuapp.com/");
   console.log(socket);
   socket.on('connect', function(){
     
     console.log("クライアント接続");

   })

















});







