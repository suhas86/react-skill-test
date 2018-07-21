import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import QuizMain from "./QuizMain"
 const DashBoard =() => {
    return (
      <div>
        <Navbar />
        <Stats />
        <hr />
        <QuizMain />
      </div>
    )
}

export default DashBoard;