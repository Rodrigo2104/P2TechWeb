var express = require('express');
var mysql = require('mysql');
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();

var app = express();

const cors = require("cors");
const port = process.env.PORT || 3001

app.set('view engine', 'ejs');
app.set('views', './views');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password:'0t0rr1n0l4r1ng0l0g1st4',
	database:'pokemon'
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




app.get('/all', function(req, res){
	
	connection.query('SELECT * FROM lista_de_pokemons', function(error, results, fields){
		if (error) throw error;
			
		res.json(results);
				// res.json({express:'hello'})
	});

});

app.post('/all', function(req, res){
	if (Object.prototype.toString.call(req.body.tipo)=="[object Undefined]"){
		connection.query('SELECT * FROM lista_de_pokemons', function(error, results, fields){
			if (error) throw error;
			
			res.json(results);
				// res.json({express:'hello'})
		});
	}
	else{
		const sql = "SELECT * FROM lista_de_pokemons WHERE tipo1 IN (?) OR tipo2 IN (?)";

		const values = [req.body.tipo,req.body.tipo];
		connection.query(sql, values, function(error, results, fields){
			if (error) return console.log(error);
			res.json(results)
			});
	}
});

app.post('/selecao', function(req, res){
		console.log(Object.prototype.toString.call(req.body.tipo)=="[object Undefined]")

		const sql = "SELECT * FROM lista_de_pokemons WHERE tipo1 IN (?) OR tipo2 IN (?)";

		const values = [req.body.tipo,req.body.tipo];
		connection.query(sql, values, function(error, results, fields){
			if (error) return console.log(error);
			res.json(results)
			});
});

app.post('/register', function(req, res){
		console.log("Entrou no registro!")
		console.log(req.body)
		console.log(req.body.name);
		console.log(req.body.login);
		console.log(req.body.password);
		const sql = "INSERT INTO users (login,password,name) VALUES (?,?,?)";


		const values = [req.body.login,req.body.password,req.body.name];
		if (req.body.password === req.body.confirmPassword){
			console.log("Confirmou senha!")
			connection.query(sql, values, function(error, results, fields){
				if (error) return console.log(error);
			});
		} else {
			res.send("Erro no casdastro.");
		}
		res.redirect('http://localhost:3000/home');
});


app.post('/login', function(req, res){
		console.log("entrou na função login!")
		console.log(req.body.login)
		console.log(req.body.password)
		const sql = "SELECT * FROM users WHERE login = (?) AND password = (?)";
		const login = req.body.login;
		const password = req.body.password;
		if (login && password){
			const values = [[login],[password]];
			connection.query(sql, values, function(error, results, fields){
				if (error) return console.log(error);
				if (results.length > 0){
					console.log(req.body.login + " logado!");
					return res.json({answer:'true'});
					// return res.redirect('http://localhost:3000/home');
				} else {
					console.log("login ou senha incorreto!");
					res.json({answer:'false'});
				}
			});
		} else {
			console.log("Erro no login!");
			res.json({answer:'false'});
		}
		
		
});



app.get('/pesquisa', function(req, res){
	res.sendFile(__dirname + '/form.html');
});

app.get('/home', function(req, res){
	res.send('/form.html');
});



app.post('/pesquisa', function(req, res){
	
	P.getPokemonByName(req.body["pokémon"]).then(function(response) {
		res.render('pokemon_informations', {page_title: "Lista de Informações sobre o Pokémon", data: response});
	});
});

app.listen(port, function(){
	console.log(port);
});
