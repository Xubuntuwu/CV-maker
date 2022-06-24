import React from "react";
import './Language.css';

class Language extends React.Component{
    constructor(props){
        super();

    }
    render(){
        return(
        <div id="cvlanguage">
            <h3>Languages</h3>
            {this.props.languagearray.map(function(object, i){
                return(
                    <ul key={`languagesection ${i}`}>
                        <li className="cvlanguage">{this.props.languagearray[i].language}</li>
                        <li className="cvproficiency">{this.props.languagearray[i].proficiency}</li>

                    </ul>
                );
            }, this)}
        </div>
        );
    }

}

export default Language;