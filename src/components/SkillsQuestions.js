import React from "react";

class SkillsQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            skillarray: this.props.skillarray,
        }
        this.saveInputs = this.saveInputs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findIndexOfList = this.findIndexOfList.bind(this);
        this.numberofquestionsup = this.numberofquestionsup.bind(this);
        this.removeInputs = this.removeInputs.bind(this);
        this.findIndexOfButton = this.findIndexOfButton.bind(this);
    }

    saveInputs(index){
        const fieldset = document.getElementById('skill-fieldset');
        const unlist = fieldset.querySelectorAll('.SkillSlot')[0];

        const newskill = unlist.querySelectorAll('.skill')[index].value;

        let currentarray = this.state.skillarray;
        currentarray.splice(index, 1, newskill);
        this.setState({
            skillarray: currentarray,
        });
        this.props.submit(currentarray);
    }
    removeInputs(index){
        let currentarray = this.state.skillarray;
            currentarray.splice(index, 1);
        this.setState({
            skillarray: currentarray,
        });
        this.props.submit(currentarray);
    }

    handleChange(e){
        const indexoflist = this.findIndexOfList(e);
        this.saveInputs(indexoflist);
    }

    findIndexOfList(e){ //findIndexOfSection
        return Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
    }
    findIndexOfButton(e){
        e.preventDefault();
        let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        this.removeInputs(index);
    }
    numberofquestionsup(e){
        e.preventDefault();
        this.setState({
            skillarray: [...this.state.skillarray, ''],
        });
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset id="skill-fieldset">
                        <legend>Skill Info</legend>
                        <ul className="SkillSlot">
                        {this.state.skillarray.map(
                            function(object, i){
                            return <li key={`skill ${i}`}>
                                    <label>Your Skill: </label>
                                    <input type="text" className="skill" onChange={this.handleChange} value={this.state.skillarray[i]}></input>
                                    <button onClick={this.findIndexOfButton}>Delete</button>
                                </li>
                            }
                        ,this)}
                        </ul>
                        <button onClick={this.numberofquestionsup}>Add Other</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default SkillsQuestions;