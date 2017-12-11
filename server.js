'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function (reguest, response) {
   console.log(reguest.method, reguest.url);
   if (reguest.url === '/style.css'){
       const css = fs.readFileSync('style.css','utf8');
       response.end(css)
   }else{
       const html = fs.readFileSync('index.html','utf8');
       response.end(html);
   }

});

console.log('port = ', process.evn.PORT);
server.listen(process.evn.PORT || 3000);

console.log('Server started!');