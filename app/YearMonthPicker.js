import React from "react"
import { Component } from "react";
//import "../css/BECalender.less";

class YearMonthPicker extends Component{
    constructor(){
        super()
        this.state={
            year:2021,
            month:4,
            currentYear:2021
        }
    }

    render(){
        var currentYear=this.state.currentYear;
        return(
            <div className="YearMonthPicker">
                <div className="inner">
                     <div className="year_panel">
                         <div className="panel_inner">
                             <div className="spancontainer">
                                <span>{currentYear-2}</span>
                                <span>{currentYear-1}</span>
                                <span ><b>{currentYear}</b></span>
                                <span >{currentYear+1}</span>
                                <span >{currentYear+2}</span>
                             </div>
                         </div>
                         <i className="ll"></i>
                         <i className="rr"  onClick={()=>{this.setState({currentYear:this.state.currentYear+1})}}></i>
                     </div>
                     <div className="month_panel">
                         <div className="col">
                             <a className={this.state.year==currentYear && this.state.month=="1" ? "cur":""}>Jan</a>
                             <a className={this.state.year==currentYear && this.state.month=="2" ? "cur":""}>Feb</a>
                             <a className={this.state.year==currentYear && this.state.month=="3" ? "cur":""}>Mar</a>
                             <a className={this.state.year==currentYear && this.state.month=="4" ? "cur":""}>Apr</a>
                             <a className={this.state.year==currentYear && this.state.month=="5" ? "cur":""}>May</a>
                             <a className={this.state.year==currentYear && this.state.month=="6" ? "cur":""}>Jun</a>
                         </div>
                         <div className="col">
                             <a>Jul</a>
                             <a>Aug</a>
                             <a>Sept</a>
                             <a>Oct</a>
                             <a>Nov</a>
                             <a>Dec</a>
                         </div>
                     </div>
                </div>
            </div>
        )
    }
}

export default YearMonthPicker;