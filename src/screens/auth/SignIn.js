import React , { Component } from 'react';

class SignIn extends Component{

    state = {
        email : '',
        password : '',
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    };

    submitSignInForm = () => {
        console.log(this.state);
    };

    render() {

        const { handleInputChange , submitSignInForm } = this;
        const { email, password } = this.state;

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => handleInputChange(e)} value={email} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => handleInputChange(e)} value={password} className="form-control"/>
                </div>
                <button onClick={submitSignInForm} className="btn btn-primary">Sign In</button>
            </div>
        )
    }
}

export default SignIn;
