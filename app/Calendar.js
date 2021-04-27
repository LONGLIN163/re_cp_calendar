import React from "react"
import { Component } from "react";
import "../css/BECalender.less";
import createDateTable from "./createDateTable"

class Calendar extends Component{
    constructor(){
        super()
        this.state={
            year:2021,
            month:4
        }
        console.log("hehe")
    }

    showDateTable(){
        console.log("xixi")
        var {rearArr,curarr,hearArr} = createDateTable(this.state.year,this.state.month);
        var dateArr = rearArr.concat(curarr).concat(hearArr);
        var trs=[];
        var tds=[];
        //console.log(this.state.dateArr);
        dateArr.forEach((day,index) => {
            if(index%7==0 && index!=0){
                trs.push(<tr key={index}>{tds}</tr>)
                tds=[];
            }
            tds.push(<td key={index} className={index<rearArr.length || index>(curarr.length+rearArr.length-1) ? "gray" : ""}>{day}</td>)
        });
        trs.push(<tr key={5}>{tds}</tr>)
        return (<tbody>{trs}</tbody>)
    }

    goNextMonth(){
        console.log("huhu")
        if(this.state.month!=12){
            this.setState({
                month:this.state.month+1
            })
        }else{
            this.setState({
                month:1,
                year:this.state.year+1
            })
        }
    }

    render(){
        console.log("haha")
        return(
            <div className="calendarChooser">
                <h4>
                    <a href="">Last Month</a>
                    {this.state.year} - {this.state.month}
                    <a onClick={(this.goNextMonth).bind(this)}>Next Month</a>
                </h4>
                <table> 
                    <thead>
                        <tr>
                            {["SUN","MON","TUE","WED","THU","FRI","SAT"].map((item,index)=>{
                                return <th key={index}>{item}</th>
                            })}
                        </tr>
                    </thead>
                   
                    {this.showDateTable()}

                </table>
            </div>
        )
    }
}

export default Calendar;