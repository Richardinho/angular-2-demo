let express = require('express');

let app = express();
let port = process.env.PORT;

app.use(express.static(__dirname + '/dist'));

app.get('*', function (request, response) {
	response.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, function () {
	console.log('listening on port:', port);
});