import React, { Component } from "react";
import { connect } from "react-redux"
class Navbar extends Component {
    render() {
        const {user} = this.props;
        return (
            <nav className="navbar navbar-light bg-light nav-background">
                <span className="navbar-brand mb-0 h1">Skill Test</span>
                <span className="navbar-text">
                    Welcome {user.firstName} {user.lastName}
                </span>
            </nav>
        )
    }
}
function mapStateToProps({user}) {
    return {
        user:user.data
    }
}
export default connect(mapStateToProps)(Navbar)