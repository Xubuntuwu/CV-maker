import React from "react";

class Skills extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return(
        <div id="cvskills">
            <h3>Skils</h3>
            <ul>
            {this.props.skillarray.map(function(object, i){
                return(<li key={`skillsection ${i}`}>{this.props.skillarray[i]}</li>);
            }, this)}
            </ul>
        </div>
        );
    }

}

export default Skills;