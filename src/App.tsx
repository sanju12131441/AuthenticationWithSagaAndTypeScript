import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginPayload, loginRequest, logout } from './auth/Actions';
import { AppState } from './rootReducer';
import './App.css'

interface State {
  email: string,
  password: string,
  submitted: boolean
}

interface Props {
  loginAction: Function,
  isLoggingIn: boolean,
  error: string,
  idToken: string,
  logoutAction: Function,
}

class App extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    };
  }

  handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      email: e.target.value
    });
  }

  handlPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: e.target.value
    });
  }

  submitLogin = (e: React.FormEvent) => {
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
      this.props.loginAction({
        email, password
      });
    }
  }

  handleLogout = () => {
    this.props.logoutAction()
  }

  render() {
    const { isLoggingIn, error, idToken } = this.props;
    const { email, password, submitted } = this.state;
    if (isLoggingIn) {
      return (
        <div className="master-container">
          <div>Loading....</div>;
        </div>
      )
    }

    if (idToken) {
      return (
        <div className="master-container">
          <div>
            <h2 className="text-center">User Login</h2>
            <button type="button" onClick={this.handleLogout} className="btn btn-primary btn-block">Logout</button>
          </div>
        </div>
      )
    }
    return (
      <div className="master-container">
        <div>
          <h2 className="text-center">User Login</h2>
          <form name="form">
            <div className={'form-group' + (submitted && !email ? ' has-error' : '')}>
              <label htmlFor="email">Email:</label>
              <input type="text" id="email" className="form-control" placeholder="Enter Email" value={this.state.email} onChange={this.handleEmailChange} name="email" />
              {submitted && !email && <div className="help-block">Email is required</div>}
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
              <label>Password: </label>
              <input type="password" id="exampleInputPassword" className="form-control input-shadow" placeholder="Enter Password" value={this.state.password} onChange={this.handlPasswordChange} name="password" />
              {submitted && !password && <div className="help-block">Password is required</div>}
            </div>

            <button type="button" onClick={this.submitLogin} className="btn btn-primary btn-block">Sign In</button>
          </form>
          {
            !isLoggingIn && <div>{error}</div>
          }
        </div>
      </div>
    )
  }
}

const mapStatetoProps = (state: AppState) => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    error: state.auth.error,
    idToken: state.auth.idToken
  }
}


const mapDispatchtoProps = dispatch => {
  return {
    loginAction: (payload: loginPayload) => dispatch(loginRequest(payload)),
    logoutAction: () => dispatch(logout()),
  }
}

export default connect(mapStatetoProps,
  mapDispatchtoProps
)(App)

