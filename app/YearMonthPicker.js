import React from "react"
import { Component } from "react";
//import "../css/BECalender.less";
import $ from "jquery";
import "../bower_components/jquery-mousewheel/jquery.mousewheel"

class YearMonthPicker extends Component{
    constructor(){
        super()
        this.state={
            year:2021,
            month:4,
            currentYear:2021
        }

        this.currentYear=this.state.currentYear;
    }

    rrBtnHandler(currentYear){
        var self=this;
        ++self.currentYear;

        //******.stop(true,true) resolve the bug******** */
        $(this.refs.span_container).append($(`<span >${self.currentYear+2}</span>`)).stop(true,true).animate({"left":-38},300,function () { 
            $(this).find("span").eq(0).remove(); // remove the first one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(1).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })

        // do not want to fix year fist. so when change the year, dont select month until u select one
        $(".month_panel").find("a").removeClass("cur");
        if(self.currentYear==self.state.year){
           $(".month_panel").find("a").eq(self.state.month-1).addClass("cur");
        }

        console.log(self.currentYear,self.state.year);
    }

    componentDidMount(){
        var self=this;
        $(this.refs.span_container).mousewheel(function(event,delta){
            //console.log(delta);
            if(delta>0){
               self.llBtnHandler()
            }else{
                self.rrBtnHandler()
            }
        })
    }

    llBtnHandler(currentYear){
        var self=this;
        --self.currentYear;

        $(this.refs.span_container).prepend($(`<span >${self.currentYear-2}</span>`)).stop(true,true).animate({"left":38},300,function () { 
            $(this).find("span").eq(-1).remove();//remove the last one
            $(this).css({"left":0}); //move back
            $(this).find("span").eq(3).removeClass("cur");
            $(this).find("span").eq(2).addClass("cur");
        })

        // do not want to fix year fist. so when change the year, dont select month until u select one
        $(".month_panel").find("a").removeClass("cur");
        if(self.currentYear==self.state.year){
           $(".month_panel").find("a").eq(self.state.month-1).addClass("cur");
        }

        console.log(self.currentYear,self.state.year);

    }

    render(){
        //var currentYear=this.state.currentYear;
        return(
            <div className="YearMonthPicker">
                <div className="inner">
                     <div className="year_panel">
                         <div className="panel_inner">
                             <div className="span_container" ref="span_container">
                                <span >{this.currentYear-2}</span>
                                <span >{this.currentYear-1}</span>
                                <span className="cur">{this.currentYear}</span>
                                <span >{this.currentYear+1}</span>
                                <span >{this.currentYear+2}</span>
                             </div>
                         </div>
                         <i className="ll" onClick={()=>{this.llBtnHandler()}}></i>
                         <i className="rr" onClick={()=>{this.rrBtnHandler()}}></i>
                     </div>
                     <div className="month_panel">
                         <div className="col">
                             <a className={this.state.year==this.currentYear && this.state.month=="1" ? "cur":""}>Jan</a>
                             <a className={this.state.year==this.currentYear && this.state.month=="2" ? "cur":""}>Feb</a>
                             <a className={this.state.year==this.currentYear && this.state.month=="3" ? "cur":""}>Mar</a>
                             <a className={this.state.year==this.currentYear && this.state.month=="4" ? "cur":""}>Apr</a>
                             <a className={this.state.year==this.currentYear && this.state.month=="5" ? "cur":""}>May</a>
                             <a className={this.state.year==this.currentYear && this.state.month=="6" ? "cur":""}>Jun</a>
                         </div>this.
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