import React, { Component } from 'react';
import axios from 'axios';



export default class Main extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
    	response:''
  	};
	}

	

	componentDidMount() {
	    this.callApi()
	      .then(res => this.setState({ response: res[0]}))
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
			{this.state.response.game_id}
			
				<table>
					<tr>
						<th>Id</th>
						<th>Nome</th>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
					</tr>

				</table>

			</div>
			)
	}
}
