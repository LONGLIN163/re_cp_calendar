import React from "react"
import {render} from "react-dom"
import BECalender from "./BECalender"
//import '../bower_components/jquery/dist/jquery.min.js'

render(
    <div>
        <BECalender onpick={(by,bm,bd,ey,em,ed)=>{}}/>
    </div>,
    document.getElementById("container")
)