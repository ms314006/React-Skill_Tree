import React from "react"


class Title extends React.Component{
    render(){
        return <span class={this.props.className}>{this.props.content}</span>
    }
}

export {Title}