import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllList } from "../action/quiz"
class QuizMain extends Component {
    state = {
        item: {}
    }
    componentDidMount() {
        this.props.dispatch(getAllList())
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.quiz.length > 0) {
            this.setState(() => ({
                item: nextProps.quiz[0]
            }))
        }
    }
    showDetails(item) {
        this.setState(() => ({
            item
        }))
    }
    render() {
        const { quiz } = this.props;
        return (
            <div className="row graph-container">
                <div className="col">
                    <div className="list-group">
                        {quiz.map(item => (
                            <a key={item._id} onClick={e => this.showDetails(item)} className="list-group-item list-group-item-action">
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{this.state.item.name}</h5>
                            <p>{this.state.item.description}</p>
                            <button type="submit" onClick={e => this.props.history.push(`/take-test/${this.state.item._id}`)}
                                className="btn btn-primary">Take Test</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps({ quiz }) {
    return {
        quiz
    }
}
export default connect(mapStateToProps)(QuizMain)