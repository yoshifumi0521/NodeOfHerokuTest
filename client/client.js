
$(function() {

   //ソケットのオブジェクトを取得。herokuに置いたサーバーに接続した。
   //var socket = io.connect("http://rocky-lake-5452.herokuapp.com/");
   var socket = io.connect("http://localhost:3000/");
   socket.on('connect', function(){
     
      //ここからsocket処理を書いていく。
      console.log("クライアント接続");

      socket.emit('login',{text:"loginしました"});

      //サーバからlogin_messageイベントが送信されたとき
      socket.on('login_message',function(data){
         
         console.log(data);

      });


      //メッセージをおくったら     












   })

    















});







