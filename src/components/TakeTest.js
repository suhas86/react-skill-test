import React, { Component } from "react"
import { connect } from "react-redux"
import Navbar from "./Navbar";
class TakeTest extends Component {
    state={
        position:0
    }
    submitAnswer() {
        if(this.props.singleQuiz.questions.length -1 > this.state.position) {
            this.setState((state) => ({
                position:state.position+1
            }))
        } 
    }
    render() {
        const { singleQuiz } = this.props;
        const question = singleQuiz.questions[this.state.position];
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h4 className="text-center">{singleQuiz.name}</h4>
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">{question.question}</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                        {question.option1}
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option2}
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option3}
                                    </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                    <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option4}
                                    </label>
                            </div>
                                <button type="submit"
                                    className="btn btn-primary" onClick={e => this.submitAnswer()}>Submit Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
function mapStateToProps({quiz}, props) {
    const {id} = props.match.params;
                const singleQuiz = quiz.find(item => item._id === id)
                console.log(singleQuiz)
    return {
                    singleQuiz
                }
                }
export default connect(mapStateToProps)(TakeTest)