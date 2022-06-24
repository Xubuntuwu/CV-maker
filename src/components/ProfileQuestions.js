import React from "react";

class ProfileQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profile: this.props.profile,
        }
        this.saveInputs = this.saveInputs.bind(this);
    }
    saveInputs(e){
        e.preventDefault();
        const newprofile = document.getElementById('profile').value;

        this.setState({
            profile: newprofile,
        });
        this.props.submit(newprofile);
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset>
                        <legend>Profile Info</legend>
                        <label htmlFor="profile"></label>
                        <textarea id="profile" onChange={this.saveInputs} value={this.state.profile}/>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default ProfileQuestions;