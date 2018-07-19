var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');
var contenu = [];

app.use('/quiz', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function(){
	console.log('listen on port 3000')
});

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'segond',
	password: 'loudmila32',
	database: 'quiz'
})

connection.connect(function(err)
{
	if (err) throw err
		console.log('You are now connected...');

	connection.query('SELECT * FROM question', function(err, results)
	{
		if (err) throw err
			
				for (var i =0; i<results.length; i++) 
				{
					contenu.push(results[i]);
				};
			
	});

});	



app.get('/Question', function(req, res) {
	res.json(contenu);
	console.log(contenu);
});
