var Mock = require('mockjs');
var Random = Mock.Random;
Random.email();
Random.cparagraph();
Random.csentence();

var data = Mock.mock({
	'list|5': [{
		'id|+1': 1,
		'email': '@email',
		'csentence': '@csentence',
		'cparagraph': '@cparagraph',
	}],
});
// console.log(JSON.stringify(data, null, 4));
// console.log(data);

var http = require('http');

var app = http.createServer(function(req,res){
    res.writeHeader(200, {'Content-Type': 'application/json'});
    // res.send(JSON.stringify({ a: 1 }, null, 3));
    // res.end(JSON.stringify(data, null, 4));
    res.end(JSON.stringify(data.list, null, 4));
});
app.listen(3000);