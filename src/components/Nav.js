import React from "react";
import './Nav.css';

class Nav extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
        <nav>
            <h2 id="apptitle">CV Maker</h2>
        </nav>);
    }
}
export default Nav;