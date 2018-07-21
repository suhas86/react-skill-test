import React, { Component } from "react";
import { connect } from "react-redux"
import Navbar from "./Navbar"
import Moment from 'moment'
class Results extends Component {
    render() {
        const { stats } = this.props;
        return (
            <div>
                <Navbar />
                {stats.map(item => (
                    <div key={item._id} className="card result-list">
                        <div className="card-body">
                        <div className="row">
                            <div className="col"><h5 className="card-title">{item.testName}</h5></div>
                            <div className="col"> <h6 className="card-subtitle mb-2 text-muted">{Moment(item.takenAt).format('LLL')}</h6></div>
                        </div>
                        <div className="row">
                            <div className="col"><p><b>Correct Answer:</b> {item.correctAnswers}</p></div>
                            <div className="col"><p><b>Wrong Answer:</b> {item.wrongAnswers}</p></div>
                        </div>
                        <div className="row">
                            <div className="col"><p><b>Time Taken:</b> {item.timeTaken}</p></div>
                            <div className="col"><p><b>Total Score:</b> {item.testScore}</p></div>
                        </div>   
                        </div>
                    </div>
                ))}

            </div>
        )
    }
}
function mapStateToProps({ stats }) {
    return {
        stats: stats.data
    }
}
export default connect(mapStateToProps)(Results)