import React from "react"
import { Component } from "react";
//import "../css/BECalender.less";
import createDateTable from "./createDateTable"
import YearMonthPicker from "./YearMonthPicker"

class Calendar extends Component{
    constructor(){
        super()
        this.state={
            year:2021,
            month:4,
            day:1,
            showPicker : true
        }
    }

    showDateTable(){

        var {rearArr,curarr,hearArr} = createDateTable(this.state.year,this.state.month);
        var dateArr = rearArr.concat(curarr).concat(hearArr);
        var trs=[];
        var tds=[];
        //console.log(this.state.dateArr);

        let classname=(day,index)=>{
            if(index<rearArr.length || index>(curarr.length+rearArr.length-1)){
                return "gray"
            }else if(day==this.state.day){
                return "cur"
            }
            return ""
        }

        dateArr.forEach((day,index) => {
            if(index%7==0 && index!=0){
                trs.push(<tr key={index}>{tds}</tr>)
                tds=[];
            }
            // tds.push(<td key={index} className={index<rearArr.length || index>(curarr.length+rearArr.length-1) ? "gray" : ""}>{day}</td>)
            tds.push(<td key={index} className={classname(day,index)}>{day}</td>)
        });
        trs.push(<tr key={5}>{tds}</tr>)
        return (<tbody>{trs}</tbody>)
    }

    goNextMonth(){

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

    // month year select event, recieve year and month from sub component
    onpick({year,month}){
       this.setState({
            showPicker : false , 
            year,
            month
       })
    }

    showpicker(){
		if(this.state.showPicker){
			return 	<YearMonthPicker year={this.state.year} month={this.state.month} onpick={(this.onpick).bind(this)}></YearMonthPicker>;
		}else{
			return "";
		}
	}

    render(){

        return(
            <div className="calendarChooser">
                <h4 onClick={()=>{this.setState({showPicker : true})}}>
                    <a>Last Month</a>
                    {this.state.year} - {this.state.month}
                    {/* <a onClick={(this.goNextMonth).bind(this)}>Next Month</a> */}
                </h4>

                {this.showpicker()}
                
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