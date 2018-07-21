import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import QuizMain from "./QuizMain"
 const DashBoard =(props) => {
    return (
      <div>
        <Navbar />
        <Stats />
        <hr />
        <QuizMain history={props.history} />
      </div>
    )
}

export default DashBoard;