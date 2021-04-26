import React from "react"
import { Component } from "react";
import "../css/BECalender.less"


class BECalender extends Component{

    render(){
        return(
            <div className="BECalender">
                <div className="result">
                    haha
                    <span className="glyphicon glyphicon-calendar calendar"></span>
                </div>
                <div className="chooseBox">
                    <div className="begin">
                         start:
                         <div className="begin_result result">
                            <span className="glyphicon glyphicon-calendar calendar"></span>
                         </div>
                    </div>
                    <div className="days">
                        total: <span className="month">6</span>month,<span className="day">10</span>days
                    </div>
                    <div className="end">
                         end:
                         <div className="end_result result">
                            <span className="glyphicon glyphicon-calendar calendar"></span>
                         </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default BECalender;