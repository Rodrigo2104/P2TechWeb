import React, { Component } from 'react';
import axios from 'axios';


export default class Main extends Component {
	  constructor(props) {
	    super(props);
	    this.state = {
	    	login: '',
	    	password: ''
	    };

	    this.handleChangeLogin = this.handleChangeLogin.bind(this);
	    this.handleChangePassword = this.handleChangePassword.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	  }

	  handleChangeLogin(event) {
	    this.setState({
	    	login: event.target.value
	    });
	  }

	  handleChangePassword(event) {
	    this.setState({
	    	password: event.target.value
	    });
	  }

	  handleSubmit(event) {
	  	console.log("Foi!")
	  	axios.post('http://localhost:3000/login', this.state).then((v)=> { console.log(v) }).catch((e) => { console.log(e)})  
	    
	  } 
	

	render(){

		return (
			<div>
			<h1>LOGIN</h1>
			<form onSumbit={this.handleSubmit}>
			Login: <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />
			Password: <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
			<input type="submit" value="Login"/>
			</form>
			</div>
			)
	}

}