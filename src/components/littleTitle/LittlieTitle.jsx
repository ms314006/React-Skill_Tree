import React from "react"

class LittleTitle extends React.Component {
    render() {
        return (
            <div class={this.props.blockClass}>
                <span class={this.props.className}>{this.props.content}</span>
            </div>
        )
    }
}

export { LittleTitle }