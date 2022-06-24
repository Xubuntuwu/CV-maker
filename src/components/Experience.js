import React from "react";
class Experience extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div id="cvexperience">
                <h3>Experience</h3>
                {this.props.experiencearray.map(function(object, i){
                    return <div key={this.generateKey(i)}>
                    <ul>
                        <li>{this.props.experiencearray[i].position}</li>
                        <li>{this.props.experiencearray[i].company}</li>
                        <li>{this.props.experiencearray[i].workdate}</li>
                        <li>{this.props.experiencearray[i].summary}</li>
                        <li>Tasks: </li>
                        <ul>
                            {this.props.experiencearray[i].maintasks.map(function(object, j){
                                return <li key={this.generateKey(i+j)}>{this.props.experiencearray[i].maintasks[j]}</li>
                            }, this)}
                        </ul>
                    </ul>
                </div>
                }, this)}
            </div>
        );
    }
}

export default Experience;