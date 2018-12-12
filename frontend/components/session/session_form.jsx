import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  // getEmail() {
  //   if (this.props.formType === 'login') return (<br/>);
  //   return (
  //     <>
  //       <br/>
  //       <label>Email:
  //         <input type="email"
  //           value={this.state.email}
  //           onChange={this.update('email')}
  //           className="login-input"
  //         />
  //       </label>
  //       <br/>
  //     </>
  //   );
  // }

  render() {
    let emailInput = (<br/>)
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
    }
    return (
      <div className="login-form-div">
        <form onSubmit={this.handleSubmit}>
          <div className="login-form">
            <br/>
            {this.props.formType === 'sign up' ? 'Sign up with your email address' : 'To continue, log in to Spotify.'}
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
      </div>
    );
  }
}

export default SessionForm;
