import React from "react";

class ContactQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            phone: this.props.phone,
            mail: this.props.mail,
            location: this.props.location,
            linkedin: this.props.linkedin
        }
        this.saveInputs = this.saveInputs.bind(this);
    }
    saveInputs(e){
        e.preventDefault();
        const newphone = document.getElementById('phone').value;
        const newmail = document.getElementById('mail').value;
        const newloc = document.getElementById('location').value;
        const newlinkedin = document.getElementById('linkedin').value;

        this.setState({
            phone: newphone,
            mail: newmail,
            location: newloc,
            linkedin: newlinkedin,
        });
        this.props.submit(newphone, newmail, newloc, newlinkedin);
    }

    render(){
        return(
            <div>
                <form onSubmit={e=>this.saveInputs(e)}>
                    <fieldset>
                        <legend>Contact Info</legend>
                        <ul>
                            <li>
                                <label htmlFor="phone">Your phonenumber: </label>
                                <input type="text" id="phone" defaultValue={this.phone} onChange={this.saveInputs}></input>
                            </li>
                            <li>
                                <label htmlFor="mail">Your email: </label>
                                <input type="text" id="mail" defaultValue={this.mail} onChange={this.saveInputs}></input>
                            </li>
                            <li>
                                <label htmlFor="location">Your location: </label>
                                <input type="text" id="location" defaultValue={this.location} onChange={this.saveInputs}></input>
                            </li>
                            <li>
                                <label htmlFor="linkedin">Your linkedin: </label>
                                <input type="text" id="linkedin" defaultValue={this.linkedin} onChange={this.saveInputs}></input>
                            </li>
                        </ul>
                        {/* <button>Submit</button> */}
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default ContactQuestions;