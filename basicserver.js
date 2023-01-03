const http = require('http');

http.createServer((req,resp)=>{
    resp.write("hello this is suraj chauhan");
    resp.end();
}).listen ("4500");



