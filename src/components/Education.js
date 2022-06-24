import React from "react";
import './Education.css';
class Education extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div id="cveducation">
                <h3>Education</h3>
                {this.props.educationarray.map(function(object, i){
                    return <div key={this.generateKey(i)}>
                    <ul>
                        <li id="cvdegree">{this.props.educationarray[i].degree}</li>
                        <li id="cvschool">{this.props.educationarray[i].school}</li>
                        <li id="cvschooldate">{this.props.educationarray[i].schooldate}</li>
                    </ul>
                </div>
                }, this)}
            </div>
        );
    }
}

export default Education;