import React , { Component } from 'react';
import {connect} from "react-redux";
import {selectUser , selectAuthPending} from "../../store/auth/auth.selector";
import {SignInUser} from "../../store/auth/auth.action";
import Loader from "../../components/loader/loader";

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
        this.props.loginUser(this.state);
    };

    render() {

        const { handleInputChange , submitSignInForm } = this;
        const { email, password } = this.state;
        const { isLoading } = this.props;

        return (
            <Loader isLoading={isLoading}>
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
            </Loader>
        )
    }
}

const mapStateToProps = state => {
    return {
        user : selectUser(state),
        isLoading : selectAuthPending(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loginUser: data => dispatch(SignInUser(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignIn);
