import React , { Component } from 'react';

class SignUp extends Component{

    state = {
        name : '',
        email : '',
        password : '',
        c_password : ''
    };

    handleInputChange = e => {
      this.setState({
          [e.target.name] : e.target.value
      })
    };

    submitSignUpForm = () => {
        this.props.createNewUser(this.state);
    };

    render() {

        const { handleInputChange , submitSignUpForm } = this;
        const { name , email, password, c_password } = this.state;
        console.log(this.props);

        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" onChange={e => handleInputChange(e)} value={name} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" onChange={e => handleInputChange(e)} value={email} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" onChange={e => handleInputChange(e)} value={password} className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="c_password">Confirm Password</label>
                    <input type="password" name="c_password" id="c_password" onChange={e => handleInputChange(e)} value={c_password} className="form-control"/>
                </div>
                <button onClick={submitSignUpForm} className="btn btn-primary">Sign Up</button>
            </div>
        )
    }
}

export default SignUp;
