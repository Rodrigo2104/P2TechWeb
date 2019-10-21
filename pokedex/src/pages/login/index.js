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
    	this.setState({logged:v.data["answer"]});
    	if (this.state.logged === "true"){
    		 console.log("Logged TRUE")
    		 // this.setState({redirect:'http://localhost:3000/home'});
    		 // Redirecionar pagina
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

// export default class Main extends Component {
// 	  constructor(props) {
// 	    super(props);
// 	    this.state = {
// 	    	login: '',
// 	    	password: ''
// 	    };

// 	    this.handleChangeLogin = this.handleChangeLogin.bind(this);
// 	    this.handleChangePassword = this.handleChangePassword.bind(this);
// 	    this.handleSubmit = this.handleSubmit.bind(this);
// 	  }

// 	  handleChangeLogin(event) {
// 	  	console.log(event)
// 	    this.setState({
// 	    	login: event.target.value
// 	    });
// 	  }

// 	  handleChangePassword(event) {
// 	    this.setState({
// 	    	password: event.target.value
// 	    });
// 	  }

// 	  handleSubmit(event) {
// 	  	alert("foiiiiiii")
// 	  	console.log("Foi!")
// 	  	axios.post('http://localhost:3001/home', this.state).then((v)=> { console.log(v) }).catch((e) => { console.log(e)})  
	    
// 	    } 
	

// 	render(){


// 		return (
// 			<div>
// 			<h1>LOGIN</h1>
// 			<form onSumbit={this.handleSubmit}>
// 			Login: <input type="text" value={this.state.login} onChange={this.handleChangeLogin} />
// 			Password: <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
// 			<input type="submit" value="Login"/>
// 			</form>
// 			</div>
// 			)
// 	}

// }