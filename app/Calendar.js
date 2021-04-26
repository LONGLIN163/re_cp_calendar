import React from "react"
import { Component } from "react";
import "../css/BECalender.less";
import createDateTable from "./createDateTable"



class Calendar extends Component{
    constructor(){
        super()
        this.state={
            "dateArr": createDateTable()
        }
      
    }

    showDateTable(){
        return this.state.dateArr.map((item,index)=>{
            return <tr key={index}>
                {item.map((i,x)=>{
                    return <td key={x}>{i}</td>
                })}
            </tr>
        })
    }

    render(){
        return(

            <div className="calendarChooser">
                <h4>hahahah</h4>
                <table> 
                    <thead>
                        <tr>
                            {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((item,index)=>{
                                return <th key={index}>{item}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.showDateTable()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Calendar;