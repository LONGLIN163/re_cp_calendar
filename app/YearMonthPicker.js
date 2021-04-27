import React from "react"
import { Component } from "react";
import "../css/BECalender.less";

class YearMonthPicker extends Component{
    constructor(){
        super()
    }

    render(){
        console.log("haha")
        return(
            <div className="YearMonthPicker">
                <div className="inner">
                     <div className="year_panel">
                         <span>2020</span>
                         <span>2020</span>
                         <span ><b>2020</b></span>
                         <span >2020</span>
                         <span >2020</span>
                     </div>
                     <div className="month_panel">
                         <div className="col">
                             <a>Jan</a>
                             <a>Feb</a>
                             <a>Mar</a>
                             <a>Apr</a>
                             <a>May</a>
                             <a>Jun</a>
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