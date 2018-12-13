import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, receiveErrors, loginDemo } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'log in',
    navLink:  <><br></br>
                <div className="bold-text">Don't have an account?
                  <br></br><br></br><br></br>
                  <Link to="/signup" className="not-green-button">SIGN UP FOR CLONE-IFY</Link>
                </div>
              </>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    receiveErrors: (errors) => dispatch(receiveErrors(errors)),
    loginDemo: () => dispatch(loginDemo())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
