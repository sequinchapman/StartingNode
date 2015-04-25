
var http = require("http");
/*http.createServer(function(request, response){
    response.writeHead(200);
    request.pipe(response);
}).listen(8080);
console.log(("listening on port 8080..."));*/


var fs = require('fs');

http.createServer(function(request, response){
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = request.headers['content-length'];
    var uploadedBytes = 0;
    request.pipe(newFile);
    request.on('data',function(chunk){
        uploadedBytes += chunk.length;
        var progress = (uploadedBytes / fileBytes) * 100;
        response.write("progress: " +  parseInt(progress, 10) + "%\n");
    });

}).listen(8080);
console.log(("listening on port 8080..."));