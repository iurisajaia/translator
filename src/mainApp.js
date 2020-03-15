import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from "./screens/about/About";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import SignIn from "./screens/auth/SignIn";
import './App.css';
import SignUpContainer from "./store/auth/SignUpContainer";


const MainApp = () => {
    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/register" component={SignUpContainer} exact/>
                <Route path="/login" component={SignIn} exact/>
            </Switch>
        </>
    )
};

export default MainApp;

