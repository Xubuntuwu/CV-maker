import React from "react";
import './Skills.css';

class Skills extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return(
        <div id="cvskills">
            <h3>Skills</h3>
            <ul>
            {this.props.skillarray.length>0 && this.props.skillarray[0]!== '' ? this.props.skillarray.map(function(object, i){
                return(<li className="cvskill" key={`skillsection ${i}`}>{this.props.skillarray[i]}</li> );
            }, this): ''}
            </ul>
        </div>
        );
    }

}

export default Skills;