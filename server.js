const express = require("express");

let app = new express();

app.use(express.static(__dirname + '/public'));

app.get('/user', (req, res) => {
	res.send('User endppoint!!');

});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
