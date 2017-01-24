/**
 * Created by Sonam on 1/9/2017.
 */

var http = require('http');
var fs =require('fs');

var success={};
var failure={};

//accept request and responce which is usual for any controller method
var myHandler= function (req,res) {
    console.log(req.headers);
    console.log(req.url);
    fs.readFile('./green.txt', 'utf8', function (err, data) {

        if (err) {
            res.writeHead(502, 'something happened', {"content-type": "application/json"});
            failure.error = err;
            res.end(JSON.stringify(failure));
        }
        else {
            res.writeHead(200, 'All good', {"content-type": "application/json"});
            success.message = data;
            res.end(JSON.stringify(success));

        }
    })
};
var server=http.createServer(myHandler);
server.listen(4001);
console.log("We are talking");
