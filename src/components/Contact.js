import React from "react";

class Contact extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div>
                <h3>Contact</h3>
                <ul>
                    <li id="cvphone" key={this.generateKey('phone')}>{this.props.phone}</li>
                    <li id="cvmail" key={this.generateKey('mail')}>{this.props.mail}</li>
                    <li id="cvloc" key={this.generateKey('loc')} >{this.props.location}</li>
                    {this.props.linkedin!==''? <li id="cvlinkedin" key={this.generateKey('linkedin')}>{this.props.linkedin}</li> : ''}
                </ul>
            </div>
        );
    }
}
export default Contact;