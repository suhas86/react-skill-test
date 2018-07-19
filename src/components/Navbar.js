import React, { Component } from "react";
import { connect } from "react-redux"
class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light nav-background">
                <span className="navbar-brand mb-0 h1">Skill Test</span>
            </nav>
        )
    }
}

export default connect()(Navbar)