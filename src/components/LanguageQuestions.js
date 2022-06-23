import React from "react";

class LanguageQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            languagearray: this.props.languagearray,
        }
        this.saveInputs = this.saveInputs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findIndexOfList = this.findIndexOfList.bind(this);
        this.numberofquestionsup = this.numberofquestionsup.bind(this);
        this.removeInputs = this.removeInputs.bind(this);
        this.findIndexOfButton = this.findIndexOfButton.bind(this);
    }

    saveInputs(index){
        const fieldset = document.getElementById('language-fieldset');
        const unlist = fieldset.querySelectorAll('.LanguageSlot')[index];

        const newlanguage = unlist.querySelector('#language').value;
        const newproficiency = unlist.querySelector('#proficiency').value;

        let currentarray = this.state.languagearray;
        currentarray.splice(index, 1, {language: newlanguage, proficiency: newproficiency});
        this.setState({
            languagearray: currentarray,
        });
        this.props.submit(currentarray);
    }
    removeInputs(index){
        let currentarray = this.state.languagearray;
            currentarray.splice(index, 1);
        this.setState({
            languagearray: currentarray,
        });
        this.props.submit(currentarray);
    }

    handleChange(e){
        const indexoflist = this.findIndexOfList(e);
        this.saveInputs(indexoflist);
    }

    findIndexOfList(e){ //findIndexOfSection
        return Array.from(e.target.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode)-1;
    }
    findIndexOfButton(e){
        e.preventDefault();
        let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)-1;
        this.removeInputs(index);
    }
    numberofquestionsup(e){
        e.preventDefault();
        this.setState({
            languagearray: [...this.state.languagearray, {language: '', proficiency: ''}],
        });
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset id="language-fieldset">
                        <legend>Language Info</legend>
                        {this.state.languagearray.map(
                            function(object, i){
                            return <ul key={`language ${i}`} className="LanguageSlot">
                                <li>
                                    <label>Your language: </label>
                                    <input type="text" id="language" onChange={this.handleChange} value={this.state.languagearray[i].language}></input>
                                </li>
                                <li>
                                    <label>Your proficiency: </label>
                                    <input type="text" id="proficiency" onChange={this.handleChange} value={this.state.languagearray[i].proficiency}></input>
                                </li>
                                <button onClick={this.findIndexOfButton}>Delete</button>
                                </ul>
                            }
                        ,this)}
                        <button onClick={this.numberofquestionsup}>Add Other</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default LanguageQuestions;