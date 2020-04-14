import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from "./screens/about/About";
import Header from "./components/header/Header";
import Home from "./screens/home/Home";
import SignIn from "./screens/auth/SignIn";
import './App.css';
import SignUpContainer from "./screens/auth/SignUp";
import Footer from "./components/footer/Footer";
import Words from "./screens/words/Words";
import Profile from "./screens/profile/Profile";

const MainApp = () => {
    return (
        <>
            <div data-spy="scroll" data-target="#scrollspy" data-offset="1">
            <Header/>
                <div className="main">
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/about" component={About} exact/>
                    <Route path="/register" component={SignUpContainer} exact/>
                    <Route path="/login" component={SignIn} exact/>
                    <Route path="/words/:language/:id" component={Words} exact/>
                    <Route path="/profile/:id" component={Profile} exact/>
                </Switch>
                </div>
            <Footer/>
            </div>
        </>
    )
};

export default MainApp;

