import React, { Component } from "react"
import { connect } from "react-redux"
import Navbar from "./Navbar";
import axios from "axios";
import { getHeader } from "../utils/helper"
class TakeTest extends Component {
    state = {
        position: 0,
        selectedAnswer: '',
        correctCount: 0
    }
    handleInputChange(name, e) {
        const value = e.target.value;
        this.setState(() => ({
            [name]: value
        }))
    }
    submitAnswer() {
        const currentQuestion = this.props.singleQuiz.questions[this.state.position];
        let data = {};
        data.testId = this.props.match.params.id;
        data.questionId = currentQuestion._id;
        data.givenAnswer = this.state.selectedAnswer;
        data.correctAnswer = currentQuestion.answer;
        data.timeTaken = 5;
        // Save Answer
        axios.post("https://young-shore-27367.herokuapp.com/test/saveanswer", data, getHeader())
            .then((response) => {
                let currentCorrectAnswer = this.state.correctCount;

                if (currentQuestion.answer === this.state.selectedAnswer) {
                    currentCorrectAnswer = currentCorrectAnswer + 1;
                }
                this.setState((state) => ({
                    position: state.position + 1,
                    correctCount: currentCorrectAnswer,
                    selectedAnswer: ''
                }));

                // Save Test
                if (this.state.position === this.props.singleQuiz.questions.length ) {
                    data = {};
                    data.testIds = this.props.match.params.id;
                    data.testScore = this.state.correctCount * 10;
                    data.correctAnswers = this.state.correctCount;
                    data.wrongAnswers = this.props.singleQuiz.questions.length - this.state.correctCount;
                    data.testName = this.props.singleQuiz.name;
                    data.timeTaken = 40

                    axios.post("https://young-shore-27367.herokuapp.com/test/savetest", data, getHeader())
                        .then(response => console.log(response))
                }
            });

    }
    render() {
        const { singleQuiz } = this.props;
        const question = singleQuiz.questions[this.state.position];
        const { position, correctCount } = this.state;

        if (position === singleQuiz.questions.length) {
            return (
                <div>
                    <Navbar />
                    <div className="card graph-container">
                        <div className="card-body">
                            <h5 className="card-title">{singleQuiz.name}</h5>
                            <p>Correct Answer: <b>{correctCount}</b></p>
                            <p>Wrong Answer: <b>{singleQuiz.questions.length - correctCount}</b></p>
                            <b>Total Score: {correctCount * 10}</b>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h4 className="text-center">{singleQuiz.name}</h4>
                    <div className="card ">
                        <div className="card-body">
                            <h5 className="card-title">{question.question}</h5>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" onChange={this.handleInputChange.bind(this, 'selectedAnswer')} name="exampleRadios" value={question.option1} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option1}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleInputChange.bind(this, 'selectedAnswer')} value={question.option2} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option2}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleInputChange.bind(this, 'selectedAnswer')} value={question.option3} />
                                <label className="form-check-label" htmlFor="exampleRadios1">
                                    {question.option3}
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="exampleRadios" onChange={this.handleInputChange.bind(this, 'selectedAnswer')} value={question.option4} />
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
function mapStateToProps({ quiz }, props) {
    const { id } = props.match.params;
    const singleQuiz = quiz.find(item => item._id === id)
    return {
        singleQuiz
    }
}
export default connect(mapStateToProps)(TakeTest)