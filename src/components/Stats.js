import React, { Component } from "react";
import { connect } from "react-redux";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import { getStats } from "../action/stats"
Charts(FusionCharts);

const colors = "#337AB7, #E74C3C, #F39C12, #7DCEA0";
let myDataSource;
let chartConfigs;

class Stats extends Component {
    state = {
        loadChart:false
      }
    componentDidMount() {
        this.props.dispatch(getStats()).then((response) => {
            const { stats } = response;
            myDataSource = {
                chart: {
                    showlabels: "0",
                    showlegend: "0",
                    enablemultislicing: "0",
                    showpercentvalues: 0,
                    palettecolors: colors
                },
                data: [
                    {
                        label: 'Total Test',
                        value: stats.totalTest,
                    },
                    {
                        label: 'Total Correct Answers',
                        value: stats.correct,
                    },
                    {
                        label: 'Total Wrong Answers',
                        value: stats.wrong,
                    },
                    {
                        label: 'Total Score',
                        value: stats.score,
                    }
                ],
            };
            chartConfigs = {
                type: 'pie3d',
                width: 600,
                height: 400,
                dataFormat: 'json',
                dataSource: myDataSource,

            };
            this.setState(() => ({
                loadChart: true
            }))
        })
    }
    render() {
        const { stats } = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        {this.state.loadChart && (<ReactFC {...chartConfigs} />)}

                    </div>
                    <div className="col-4">
                        <div className="row graph-card ">
                            <div className="card  card-body primary-bg ">
                                <span className="mb-0 score">Total Test <b className="score">{stats.totalTest}</b></span>
                            </div>
                        </div>
                        <div className="row graph-card">
                            <div className="card  card-body secondary-bg">
                                <span className="mb-0 score ">Total Correct Answer <b className="score">{stats.correct}</b></span>
                            </div>
                        </div>
                        <div className="row graph-card">
                            <div className="card  card-body third-bg">
                                <span className="mb-0 score">Total Wrong Answer <b className="score">{stats.wrong}</b></span>
                            </div>
                        </div>
                        <div className="row graph-card">
                            <div className="card  card-body fourth-bg">
                                <span className="mb-0 score">Total Score <b className="score">{stats.score}</b></span>
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
export default connect(mapStateToProps)(Stats)