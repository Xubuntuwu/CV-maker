import React from "react";

class EducationQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            educationarray: this.props.educationarray,
        }
        this.saveInputs = this.saveInputs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findIndexOfList = this.findIndexOfList.bind(this);
        this.numberofquestionsup = this.numberofquestionsup.bind(this);
        this.removeInputs = this.removeInputs.bind(this);
        this.findIndexOfButton = this.findIndexOfButton.bind(this);
    }

    saveInputs(index){
        const fieldset = document.getElementById('education-fieldset');
        const unlist = fieldset.querySelectorAll('.educationSlot')[index];

        const newdegree = unlist.querySelector('#degree').value;
        const newschool = unlist.querySelector('#school').value;
        const newschooldate = unlist.querySelector('#schooldate').value;

        let currentarray = this.state.educationarray;
        currentarray.splice(index, 1, {degree: newdegree, school: newschool, schooldate: newschooldate});
        this.setState({
            educationarray: currentarray,
        });
        this.props.submit(currentarray);
    }
    removeInputs(index){
        let currentarray = this.state.educationarray;
        // if(currentarray.length>1){
            currentarray.splice(index, 1);
        this.setState({
            educationarray: currentarray,
        });
        this.props.submit(currentarray);
        // }
    }

    handleChange(e){
        const indexoflist = this.findIndexOfList(e);
        this.saveInputs(indexoflist);
    }

    findIndexOfList(e){
        return Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode)-1;
    }
    findIndexOfButton(e){
        e.preventDefault();
        let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)-1;
        this.removeInputs(index);
    }
    numberofquestionsup(e){
        e.preventDefault();
        this.setState({
            educationarray: [...this.state.educationarray, {degree: '', school: '', schooldate: ''}],
        });
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset id="education-fieldset">
                        <legend>Education Info</legend>
                        {this.state.educationarray.map(
                            function(object, i){
                            return <div className="educationSlot" key={`education ${i}`}>
                                <ul>
                                    <li>
                                        <label htmlFor="degree">Your degree/study:</label>
                                        <input type="text" id="degree" value={this.state.educationarray[i].degree} onChange={this.handleChange}></input>
                                    </li>
                                    <li>
                                        <label htmlFor="school">Your school: </label>
                                        <input type="text" id="school" value={this.state.educationarray[i].school} onChange={this.handleChange}></input>
                                    </li>
                                    <li>
                                        <label htmlFor="schooldate">Date of study: </label>
                                        <input type="text" id="schooldate" value={this.state.educationarray[i].schooldate} onChange={this.handleChange}></input>
                                    </li>
                                </ul>
                                <button onClick={this.findIndexOfButton}>Delete</button>
                            </div>
                            }
                        ,this)}
                        <button onClick={this.numberofquestionsup}>Add Other</button>
                    </fieldset>
                </form>
            </div>
        );
    }
}
export default EducationQuestions;