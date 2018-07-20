import React, { Component } from "react";
import { connect } from "react-redux";
import Navbar from "./Navbar";
import Stats from "./Stats"
class DashBoard extends Component {
  render() {
    
    return (
      <div>
        <Navbar />
        <Stats />
        <hr />
        <div className="row graph-container">
          <div className="col">
            <div className="list-group">
              <a href="javascript:void(0)" className="list-group-item list-group-item-action">
                Cras justo odio
              </a>
              <a href="javascript:void(0)" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
              <a href="javascript:void(0)" className="list-group-item list-group-item-action">Morbi leo risus</a>
              <a href="javascript:void(0)" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
              <a href="javascript:void(0)" className="list-group-item list-group-item-action">Vestibulum at eros</a>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Quiz Name</h5>
                <h6 className="card-subtitle mb-2 text-muted">Quiz Time</h6>
                <p><b>Correct Answer:</b> 10</p>
                <p><b>Wron Answer:</b> 10</p>
                <p><b>Time Taken:</b> 10</p>
                <p><b>Total Score:</b> 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
function mapStateToProps({stats}) {
  return {
    stats
  }
}
export default connect(mapStateToProps)(DashBoard);