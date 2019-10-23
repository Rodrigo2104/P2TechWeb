import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
var Pokedex = require('pokedex-promise-v2');
var P = new Pokedex();


export default class Main extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    	
    	searched:'false'
    };
  }

  // handleSubmit(e) {
  //   alert('O pokémon é: ' + this.input.value);
  //   this.setState({
  //       login: this.input.value
  //       P.getPokemonByName("eevee").then(function(response) {

  //       });});
  //   }
  //   e.preventDefault();
  //   axios.post('http://localhost:3001/login', this.state).then((v)=> {

  //       console.log(this.state)
  //       this.setState({logged:v.data["answer"]});
  //       if (this.state.logged === "true"){
  //            console.log("Logged TRUE")
  //            this.props.history.push("/home")
  //       } else {
  //           console.log("Logged FALSE")
  //       }

  //    })
  //   .catch((e) => { console.log(e)})
  // }

render() {
    return (
    	<div>
          Pokémon:
    		<input type="text" className="name" ref={(input) => this.inputName = input} /><br/>
            {P.getPokemonByName("eevee").name}

            <input type="submit" value="Login" />
    	</div>

    	);
}


}