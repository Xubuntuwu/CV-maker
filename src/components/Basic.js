import React from "react";
import './Basic.css';

class Basic extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div id="cvbasic">
                <p id="cvname" key={this.generateKey('name')}><span>{this.props.name}</span></p>
                {this.props.title!==''? <p id="cvtitle" key={this.generateKey('title')}>{this.props.title}</p> : ''}

            </div>
        );
    }
}
export default Basic;