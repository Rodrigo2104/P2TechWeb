import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
    	login: '',
    	password: '',
    	confirmPassword:'',
    	name:''
    };
  }

 	handleSubmit(e) {
     	this.setState({
    	login: this.inputLogin.value,
    	password: this.inputPassword.value,
    	confirmPassword: this.inputConfirmPassword.value,
    	name: this.inputName.value
    })
   		axios.post('http://localhost:3001/register?login:'+this.inputLogin.value +'password:'+this.inputPassword.value+'confirmPassword:'+this.inputConfirmPassword.value+'name:'+this.inputName.value, this.state).then((v)=> { 
    	 console.log(this.state)
    	 this.props.history.push("/home")
    	})
    .catch((error) => { console.log(error)})
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
          <input type="text" className="name" ref={(input) => this.inputName = input} /><br/>
          Login:
          <input type="text" className="login" ref={(input) => this.inputLogin = input} /><br/>
          Password:
          <input type="password" className="password" ref={(input) => this.inputPassword = input} /><br/>
          Confirm Password:
          <input type="password" className="confirmPassword" ref={(input) => this.inputConfirmPassword = input} /><br/>
        </label>
        <input type="submit" value="Register" />
      </form>
    );
  }
}