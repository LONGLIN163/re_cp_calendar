import React from "react"
import { Component } from "react";
//import "../css/BECalender.less"
import Calendar from "./Calendar"


class BECalender extends Component{
    constructor(){
        super()
        var d=new Date();
        this.state={
            
            byear: d.getFullYear(),
            bmonth:d.getMonth()+1,
            bday:d.getDate(),
            bshowCalendar:false,
                
            eyear:d.getFullYear(),
            emonth:d.getMonth()+1,
            eday:d.getDate(),
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

    dataGap(){

		var date1 = new Date(this.state.byear,this.state.bmonth,this.state.bday);
		var date2 = new Date(this.state.eyear,this.state.emonth,this.state.eday);
		var gap = date2 - date1;

		var gday = gap / 1000 / 60 / 60 / 24;

		return <div>{gday}days</div>
    }

    render(){
        return(
            <div className="BECalender">
                <div className="result">
                    haha
                    <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                </div>
                <div className="chooseBox">
                    <input type="button" value="confirm" className="submitbtn"/>
                    <input type="button" value="cancel" className="concelbtn"/>
                    <div className="begin">
                         start:
                         <div className="begin_result result">
                             <div onClick={()=>{this.setState({ "bshowCalendar":!this.state.bshowCalendar })}}>
                                {this.state.byear}-{this.state.bmonth}-{this.state.bday}
                                <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                             </div>
                            {/* <Calendar {...this.state.b} onpick={(this.onpick1).bind(this)}></Calendar> */}
                            {this.showCalendar1()}
                         </div>
                    </div>
                    <div className="days">
                       {this.dataGap()}
                    </div>
                    <div className="end">
                         end:
                         <div className="end_result result">
                             <div onClick={()=>{this.setState({ "eshowCalendar":!this.state.eshowCalendar })}}>
                                {this.state.eyear}-{this.state.emonth}-{this.state.eday}
                                <span className="glyphicon glyphicon-calendar calendarBtn"></span>
                             </div>
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