import React from "react"
import {Title} from "../Title"
import { LittleTitle } from "../littleTitle"
import { Ship } from "../Ship"

class LeftBlock extends React.Component{
    render(){
        return(
            <div id="leftBlock">
                <Title className="mainTitle" content="FRONT-END SKILL TREE" />
                <LittleTitle blockClass="rankTitleBlock" className="rankTitle" content="CURRENT RANK" />
                <LittleTitle className="littleTitle" content="FRONT-END" />
                <LittleTitle className="littleTitle" content="NOOB" />
                <Ship />
            </div>
        )
    }
}

export {LeftBlock} 