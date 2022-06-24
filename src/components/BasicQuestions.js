import React from "react";

class BasicQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            title: this.props.title,
        }
        this.saveInputs = this.saveInputs.bind(this);
    }
    saveInputs(e){
        e.preventDefault();
        const newname = document.getElementById('name').value;
        const newtitle = document.getElementById('title').value;


        this.setState({
            phone: newname,
            mail: newtitle,
        });
        this.props.submit(newname, newtitle);
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Basic Info</legend>
                        <ul>
                            <li>
                                <label htmlFor="name">Your full name: </label>
                                <input type="text" id="name" defaultValue={this.name} onChange={this.saveInputs}></input>
                            </li>
                            <li>
                                <label htmlFor="title">Professional title: </label>
                                <input type="text" id="title" defaultValue={this.title} onChange={this.saveInputs}></input>
                            </li>
                        </ul>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default BasicQuestions;