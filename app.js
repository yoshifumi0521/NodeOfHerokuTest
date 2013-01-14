
var http = require('http');

var port = process.env.PORT || 3000;
var app = http.createServer(function (req, res) {

   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.end('Hello World\n');


}).listen(port, "0.0.0.0");

console.log('Server running');


var io = require('socket.io').listen(app);
io.sockets.on('connection', function (socket) {

   console.log("サーバーサイドのソケット接続成功！"); 

   



});

//設定 
io.configure(function () {

   //HerokuではWebSocketがまだサポートされていない？ので、以下の設定が必要 
   io.set("transports", ["xhr-polling"]);
   io.set("polling duration", 10); 

   // socket.ioのログ出力を抑制する
   io.set('log level', 1);



});








