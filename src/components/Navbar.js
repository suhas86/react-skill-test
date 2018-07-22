import React, { Component } from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import {clearUser} from "../action/users"
class Navbar extends Component {
    logout() {
        localStorage.clear();
        this.props.dispatch(clearUser())
    }
    render() {
        const { user } = this.props;
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light nav-background">
                <Link className="navbar-brand" to={'/dashboard'}>Skill Test</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/results"}>Results <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <span className="navbar-text">
                            Welcome {user.firstName} {user.lastName}
                        </span>
                        <span className="fa fa-sign-out logout" onClick={e => this.logout()}></span>
                    </form>
                </div>
            </nav>
        )
    }
}
function mapStateToProps({ user }) {
    return {
        user: user.data
    }
}
export default connect(mapStateToProps)(Navbar)