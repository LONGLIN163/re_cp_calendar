import React from "react"
import { Component } from "react";
//import "../css/BECalender.less";
import $ from "jquery";

class YearMonthPicker extends Component{
    constructor(){
        super()
        this.state={
            year:2021,
            month:4,
            currentYear:2021
        }
    }

    rrBtnHandler(currentYear){
        $(this.refs.span_container).append($(`<span >${currentYear+3}</span>`)).stop(true).animate({"left":-38},300,function () { 
            $(this).find("span").eq(0).remove(); // remove the first one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(1).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })
    }

    llBtnHandler(currentYear){
        $(this.refs.span_container).prepend($(`<span >${currentYear-3}</span>`)).stop(true).animate({"left":+38},300,function () { 
            $(this).find("span").eq(-1).remove();//remove the last one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(3).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })
    }

    render(){
        var currentYear=this.state.currentYear;
        return(
            <div className="YearMonthPicker">
                <div className="inner">
                     <div className="year_panel">
                         <div className="panel_inner">
                             <div className="span_container" ref="span_container">
                                <span >{currentYear-2}</span>
                                <span >{currentYear-1}</span>
                                <span className="cur">{currentYear}</span>
                                <span >{currentYear+1}</span>
                                <span >{currentYear+2}</span>
                             </div>
                         </div>
                         <i className="ll" onClick={()=>{this.llBtnHandler(currentYear--)}}></i>
                         <i className="rr" onClick={()=>{this.rrBtnHandler(currentYear++)}}></i>
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