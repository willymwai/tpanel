import React from 'react';
import './App.css';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import FormLogin from "./auth/FormLogin";
import Home from "./dashboard/Home";
import MainMenu from "./components/MainMenu";

function App() {
    let base_route = '/app';
    return (
        <Router>
            <Switch>
                <Route exact path={`${base_route}/login`} component={FormLogin} key={1}/>
                <MainMenu key={2}>
                    <Route exact path={`${base_route}/`} component={Home} key={2.1}/>
                </MainMenu>
            </Switch>
        </Router>
    );
}

export default App;
