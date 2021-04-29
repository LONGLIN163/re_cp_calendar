import React from "react"
import { Component } from "react";
//import "../css/BECalender.less"
import Calendar from "./Calendar"


class BECalender extends Component{
    constructor(){
        super()
        this.state={
            
            byear:2021,
            bmonth:5,
            bday:14,
            bshowCalendar:false,
                
            eyear:2023,
            emonth:5,
            eday:14,
            eshowCalendar:false 
            
        }
    }

    onpick1({year,month,day}){
       this.setState({
            byear:year,
            bmonth:month,
            bday:day,
            bshowCalendar:false 
       })
    }
    onpick2({year,month,day}){
       this.setState({
            eyear:year,
            emonth:month,
            eday:day,
            eshowCalendar:false 
       })
    }

    showCalendar1(){
        var props={
           year:this.state.byear,
           month:this.state.bmonth,
           day:this.state.bday
        }
        if(this.state.bshowCalendar){
            return <Calendar {...props} onpick={(this.onpick1).bind(this)}></Calendar>
        }
    }

    showCalendar2(){
        var props={
            year:this.state.eyear,
            month:this.state.emonth,
            day:this.state.eday
         }
        if(this.state.eshowCalendar){
            return <Calendar {...props} onpick={(this.onpick2).bind(this)}></Calendar>
        }
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
                         <div className="begin_result result" onClick={()=>{this.setState({ "bshowCalendar":!this.state.bshowCalendar })}}>
                            {this.state.byear}-{this.state.bmonth}-{this.state.bday}
                            <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                            {/* <Calendar {...this.state.b} onpick={(this.onpick1).bind(this)}></Calendar> */}
                            {this.showCalendar1()}
                         </div>
                    </div>
                    <div className="days">
                        total: <span className="month">6</span>month,<span className="day">10</span>days
                    </div>
                    <div className="end">
                         end:
                         <div className="end_result result" onClick={()=>{this.setState({ "eshowCalendar":!this.state.eshowCalendar })}}>
                            {this.state.eyear}-{this.state.emonth}-{this.state.eday}
                            <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                            {/* <Calendar {...this.state.e} onpick={(this.onpick2).bind(this)}></Calendar> */}
                            {this.showCalendar2()}
                         </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default BECalender;