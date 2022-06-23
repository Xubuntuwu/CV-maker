import React from "react";
class Education extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div id="Education">
                <h3>Education</h3>
                {/* key={this.generateKey(`this.props.educationarray[${i}].schooldate`)} */}
                {this.props.educationarray.map(function(object, i){
                    return <div key={this.generateKey(i)}>
                    <ul>
                        <li>{this.props.educationarray[i].degree}</li>
                        <li>{this.props.educationarray[i].school}</li>
                        <li>{this.props.educationarray[i].schooldate}</li>
                    </ul>
                </div>
                }, this)}
            </div>
        );
    }
}

export default Education;