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
    	logged:'false'
    };

  }

  handleSubmit(e) {
    alert('Login: ' + this.inputLogin.value + '   Password: ' + this.inputPassword.value);
    this.setState({
    	login: this.inputLogin.value,
    	password: this.inputPassword.value
    })
    e.preventDefault();
    axios.post('http://localhost:3001/login', this.state).then((v)=> {
    	console.log(this.state)
    	this.setState({logged:v.data["answer"]});
    	if (this.state.logged === "true"){
    		 console.log("Logged TRUE")
      		 this.props.history.push("/home")
    	} else {
    		console.log("Logged FALSE")
    	}

     })
    .catch((e) => { console.log(e)})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Login:
          <input type="text" className="login" ref={(input) => this.inputLogin = input} />
          Password:
          <input type="password" className="password" ref={(input) => this.inputPassword = input} />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

