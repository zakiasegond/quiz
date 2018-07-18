var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var app = express();
var questionnaire = [];


app.listen(3400, function(){
	console.log('listen on port 3400')
});

app.use('/questionnaire', express.static(__dirname + '/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function(req, res){
	res.send('Hello World!');
});

app.get('/', function(req, res){
	res.sendfile('quiz.html');
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

	connection.query('SELECT * FROM liste question-reponse', function(err, results)
	{
		if (err) throw err
			
				for (var i =0; i<results.length; i++) 
				{
					questionnaire.push(results[i]);
				};
			
	});

});	



app.get('/Question', function(req, res) {
	res.json(questionnaire);
	console.log(questionnaire);
});
