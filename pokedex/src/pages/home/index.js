import React, { Component } from 'react';
import axios from 'axios';



export default class Main extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
    	response:[],
    	lista_de_tipos:[
    					'normal',
    					'fighting',
    					'flying',
    					'poison',
    					'ground',
    					'rock',
    					'bug',
    					'ghost',
    					'steel',
    					'fire',
    					'water',
    					'grass',
    					'electric',
    					'psychic',
    					'ice',
    					'dragon',
    					'dark',
    					'fairy'
    					],
  		initial:'false'

  	};
	}

	componentDidMount() {
	    this.callApi()
	      .then(res => this.setState({ response: res}))
	      .catch(err => console.log(err));
	      console.log(this.state.response);
	  }
  
  	callApi = async () => {
    	const response = await fetch('/all');
    	const body = await response.json();
    	if (response.status !== 200) throw Error(body.message);
    
   		return body;
  	};


// handleSubmit = async e => {
//     e.preventDefault();
//     const response = await fetch('/api/world', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ post: this.state.post }),
//     });
//     const body = await response.text();
    
//     this.setState({ responseToPost: body });
//   };

	render() {


		return (
			<div>

			<form action="/all" method="post">
			<fieldset>
			<h1>Tipos</h1>
			{this.state.lista_de_tipos.map(tipo => 
				<label class="container">
				<input type="checkbox" name="tipo" value={tipo} ></input><span class="checkmark"></span>{tipo}<br></br>
				</label>
				)}	

			<input type="submit" value="Pesquisar" name="search"></input>
			</fieldset>
			</form>
			

			<table>
			<tr>
				<th>Id</th>
				<th>Nome</th>
				<th>Aparência</th>
			</tr>
			{this.state.response.map(poke => 
				
					<tr>	
						<td>{poke.game_id}</td>
						<td>{poke.nome}</td>
						<td><img src={poke.sprite_front_default}></img></td>
					</tr>
			)}
				</table>
			</div>
			


			
			)
	}
}


