import React, { Component } from "react";
import axios from 'axios';
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
        console.log(this.state);
        axios.post('/users/login',this.state).then(response => console.log(response.data));
    }
    render() {
        return (
            <div className="container-fluid">
                <h2 className="text-center">Welcome to Skill Test</h2>
                <div className="row">
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
                                 placeholder="Password" onChange={this.handleInputChange.bind(this,'password')} />
                            </div>
                            <button type="submit" onClick={() => this.checkLogin()} className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card card-container">
                            <h3>Sign Up</h3>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="email" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="email" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Last Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email address</label>
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobileNo">Mobile No</label>
                                <input type="email" className="form-control" id="mobileNo" aria-describedby="emailHelp" placeholder="Enter Mobile No" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password"> Password</label>
                                <input type="email" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter password" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input type="email" className="form-control" id="confirmPassword" aria-describedby="emailHelp" placeholder="Confirm password" />
                            </div>
                            <button type="submit" className="btn btn-primary">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;