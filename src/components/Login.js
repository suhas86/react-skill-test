import React, { Component } from "react";
import { connect } from "react-redux";
import { checkUser } from "../action/users"
class Login extends Component {
    state = {
        email: "",
        password: "",
        isValid: false
    }
    handleInputChange(name, e) {
        const value = e.target.value;
        this.setState(() => ({
            [name]: value
        }))
    }
    checkLogin() {
        this.props.dispatch(checkUser(this.state)).then(response => {
            const { user } = response;
            if (!user.error) {
                localStorage.setItem("token",user.token)
                this.props.history.push("/dashboard");
            }
        });
    }
    render() {
        const { user } = this.props;
        return (
            <div className="container-fluid">
                <h2 className="text-center">Welcome to Skill Test</h2>
                <div className="row graph-container">
                <div className="col"></div>
                    <div className="col">
                        <div className="card card-container">
                            <h3>Sign in</h3>
                            <div className="form-group">
                                <label htmlFor="signInEmail">Email address</label>
                                <input type="email" onChange={this.handleInputChange.bind(this, 'email')}
                                    className="form-control" id="signInEmail" aria-describedby="emailHelp"
                                    placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="signInPassword">Password</label>
                                <input type="password" className="form-control" id="signInPassword"
                                    placeholder="Password" onChange={this.handleInputChange.bind(this, 'password')} />
                            </div>
                            {user.error && (<div className="alert alert-danger" role="alert">
                                {user.message}
                            </div>)}

                            <button type="submit" onClick={() => this.checkLogin()} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                    <div className="col"></div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ user }) {
    return { user }
}
export default connect(mapStateToProps)(Login);