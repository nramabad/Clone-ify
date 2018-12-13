import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demoLogin() {
    this.props.loginDemo();
  }

  render() {
    const demo = (<>
                    <br></br><br></br>
                    <button onClick={this.demoLogin} className="guest-button">LOG IN AS GUEST</button>
                    <br></br><br></br>
                    <fieldset className="hr-line">
                      <legend align="center" className="or-separator" >OR</legend>
                    </fieldset>
                  </>);
    let emailInput = (<br/>);
    let afterForm = (<>{this.props.navLink}</>);
    if (this.props.formType === 'sign up') {
      emailInput = (
        <>
          <br/>
          <label>
            <input type="email"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              placeholder="Email"
            />
          </label>
          <br/>
        </>
      );
      afterForm = (<>{this.props.navLink}</>);
    }
    return (
      <div className="login-form-div">
        <Link to="/"><img src={window.logoURL} /></Link>
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
            {this.props.formType === 'sign up' ? 'Sign up with your email address' : <>To continue, log in to Spotify. {demo}</> }
            {this.renderErrors()}
            <br/>
            <label>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
                placeholder="Username"
              />
            </label>
            {emailInput}
            <label>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
                placeholder="Password"
              />
            </label>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>

        {afterForm}

      </div>
    );
  }
}

export default SessionForm;
