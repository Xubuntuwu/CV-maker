import React from "react";
import './Experience.css';
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
                        <li className="cvposition">{this.props.experiencearray[i].position}</li>
                        <li className="cvcompanyandtime"><span className="cvcompany">{this.props.experiencearray[i].company}</span> | <span className="cvworktime">{this.props.experiencearray[i].workdate}</span></li>
                        <li className="cvworksummary">{this.props.experiencearray[i].summary}</li>
                        <ul className="cvtasklist">
                            {this.props.experiencearray.length>0 && this.props.experiencearray[0]!==''? this.props.experiencearray[i].maintasks.map(function(object, j){
                                return <li key={this.generateKey(i+j)}>{this.props.experiencearray[i].maintasks[j]}</li>
                            }, this): ''}
                        </ul>
                    </ul>
                </div>
                }, this)}
            </div>
        );
    }
}

export default Experience;