import SignUp from "../../screens/auth/SignUp";
import { connect } from 'react-redux';
import {SignUpNewUser} from "./auth.action";
import {selectUser} from "./auth.selector";

const mapStateToProps = state => {
    return {
        user : selectUser(state)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        createNewUser: data => dispatch(SignUpNewUser(data)),
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SignUp);
