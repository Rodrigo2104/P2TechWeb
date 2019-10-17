import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, BrowserRouter } from "react-router-dom";

import login from "./pages/login";

function App() {
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
