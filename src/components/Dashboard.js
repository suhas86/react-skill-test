import React, { Component } from "react";
import { connect } from "react-redux";
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import Navbar from "./Navbar"
Charts(FusionCharts);

const colors = "#337AB7, #E74C3C, #F39C12, #7DCEA0";
const myDataSource = {
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
      value: '880000',
    },
    {
      label: 'Total Correct Answers',
      value: '730000',
    },
    {
      label: 'Total Wrong Answers',
      value: '590000',
    },
    {
      label: 'Total Score',
      value: '520000',
    },
    {
      label: 'Daly City Serramonte',
      value: '330000',
    },
  ],
};
const chartConfigs = {
  type: 'pie3d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: myDataSource,

};
class DashBoard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-8">
              <ReactFC {...chartConfigs} />
            </div>
            <div className="col-4">
              <div className="row graph-card ">
                <div className="card  card-body primary-bg ">
                  <span className="mb-0 score">Total Test</span>
                </div>
              </div>
              <div className="row graph-card">
                <div className="card  card-body secondary-bg">
                  <span className="mb-0 score ">Total Correct Answer</span>
                </div>
              </div>
              <div className="row graph-card">
                <div className="card  card-body third-bg">
                  <span className="mb-0 score">Total Wrong Answer</span>
                </div>
              </div>
              <div className="row graph-card">
                <div className="card  card-body fourth-bg">
                  <span className="mb-0 score">Total Score</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default connect()(DashBoard);