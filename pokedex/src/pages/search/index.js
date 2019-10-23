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



render() {
    return (
    	<div>
    		Hello World!
    	</div>

    	)
}


}