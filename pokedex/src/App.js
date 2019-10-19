import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import login from "./pages/login";
import home from "./pages/home";

function App() {

	const [pokedata, setPokedata] = useState([])

	const getApiData = async () =>{
		await fetch("https://pokeapi.co/api/v2/pokemon")
		.then(({data})=>{
			setPokedata(data);
		});
		console.log(pokedata);
	}

	useEffect(()=>{
		getApiData();
	})

	
  return (

        <BrowserRouter>
            <Switch>
                <Route exact path='/login' component={login} />
            </Switch>

            <Switch>
                <Route exact path='/home' component={home} />
            </Switch>
        </BrowserRouter>

  );
}

export default App;
