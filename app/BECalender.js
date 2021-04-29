import React from "react"
import { Component } from "react";
//import "../css/BECalender.less"
import Calendar from "./Calendar"


class BECalender extends Component{

    onpick({year,month,day}){
       console.log(year,month,day)
    }

    render(){
        return(
            <div className="BECalender">
                <div className="result">
                    haha
                    <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                </div>
                <div className="chooseBox">
                    <div className="begin">
                         start:
                         <div className="begin_result result">
                            <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                            <Calendar onpick={(this.onpick).bind(this)}></Calendar>
                         </div>
                    </div>
                    <div className="days">
                        total: <span className="month">6</span>month,<span className="day">10</span>days
                    </div>
                    <div className="end">
                         end:
                         <div className="end_result result">
                            <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                            <Calendar onpick={(this.onpick).bind(this)}></Calendar>
                         </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default BECalender;