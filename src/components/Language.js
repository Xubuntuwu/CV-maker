import React from "react";

class Language extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return(
        <div>
            <h3>Languages</h3>
            {this.props.languagearray.map(function(object, i){
                return(
                    <ul key={`languagesection ${i}`}>
                        <li>{this.props.languagearray[i].language}</li>
                        <li>{this.props.languagearray[i].proficiency}</li>

                    </ul>
                );
            }, this)}
        </div>
        );
    }

}

export default Language;