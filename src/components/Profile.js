import React from "react";

class Profile extends React.Component{
    constructor(props){
        super();
    }
    generateKey = (pre) => {
        return `${pre}${new Date().getTime() }`;
    }
    render(){
        return(
            <div id="cvprofile">
                <h3>Profile</h3>
                <div id="cvprofiletext">
                    {this.props.profile}
                </div>
            </div>
        );
    }
}
export default Profile;