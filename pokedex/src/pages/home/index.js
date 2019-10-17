import React, { Component } from 'react';
import axios from 'axios';



export default class Main extends Component {

	

	render(){

		return (
			<div>
				<table>
					<tr>
						<th>Id</th>
						<th>Nome</th>
						<th>Aparência</th>
					</tr>
					<tr>
						<td><%= data["game_indices"][0]["game_index"] %></td>
						<td><%= data["name"]%></td>
						<td><img src="<%= data['sprites']['front_default']%>"><td>

					</tr>

				</table>

			</div>
			)
	}
}