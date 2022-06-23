import React from "react";

class ExperienceQuestions extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            experiencearray: this.props.experiencearray,

        }
        this.saveInputs = this.saveInputs.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.findIndexOfList = this.findIndexOfList.bind(this);
        this.numberofquestionsup = this.numberofquestionsup.bind(this);
        this.removeInputs = this.removeInputs.bind(this);
        this.findIndexOfButton = this.findIndexOfButton.bind(this);
        this.numberoftaskquestionsup= this.numberoftaskquestionsup.bind(this);
        this.findIndexOfTaskButton= this.findIndexOfTaskButton.bind(this);
        this.removeTasks = this.removeTasks.bind(this);
        this.handleTaskChange=this.handleTaskChange.bind(this);
        this.findIndexOfListTask= this.findIndexOfListTask.bind(this);
    }

    saveInputs(index){
        const fieldset = document.getElementById('experience-fieldset');
        const unlist = fieldset.querySelectorAll('.experienceSlot')[index];

        const newposition = unlist.querySelector('#position').value;
        const newcompany = unlist.querySelector('#company').value;
        const newworkdate = unlist.querySelector('#workdate').value;
        const newsummary = unlist.querySelector('#summary').value;
        const maintasklist = unlist.querySelector('#maintasks');
        const maintasklistitems = maintasklist.querySelectorAll('li');
        let maintasks = [];
        for(let i=0; i<Array.from(maintasklistitems).length;i++){
            maintasks.push(maintasklistitems[i].children[1].value);
        }
        let currentarray = this.state.experiencearray;
        currentarray.splice(index, 1, {position: newposition, company: newcompany, workdate: newworkdate, summary: newsummary, maintasks: maintasks});
        this.setState({
            experiencearray: currentarray,
        });
        this.props.submit(currentarray);
    }
    removeInputs(index){
        let currentarray = this.state.experiencearray;
            currentarray.splice(index, 1);
        this.setState({
            experiencearray: currentarray,
        });
        this.props.submit(currentarray);
    }
    removeTasks(company, index){
        let currentarray = this.state.experiencearray;
        currentarray[company].maintasks.splice(index, 1);
        this.setState({
            experiencearray: currentarray,
        });
        this.props.submit(currentarray);
    }

    handleChange(e){
        const indexoflist = this.findIndexOfList(e);
        this.saveInputs(indexoflist);
    }
    handleTaskChange(e){
        const indexoflist = this.findIndexOfListTask(e);
        this.saveInputs(indexoflist);
    }

    findIndexOfList(e){
        return Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode)-1;
    }
    findIndexOfListTask(e){
        return Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode)-1;
    }
    findIndexOfButton(e){
        e.preventDefault();
        let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode)-1;
        this.removeInputs(index);
    }
    numberofquestionsup(e){
        e.preventDefault();
        this.setState({
            experiencearray: [...this.state.experiencearray, {position: '', company: '', workdate: '', summary:'', maintasks: ['']}],
        });
        this.props.submit([...this.state.experiencearray, {position: '', company: '', workdate: '', summary:'', maintasks: ['']}]);

    }
    findIndexOfTaskButton(e){
        e.preventDefault();
        let index = Array.from(e.target.parentNode.parentNode.children).indexOf(e.target.parentNode);
        let companyindex = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode.parentNode)-1;
        this.removeTasks(companyindex,index);

    }
    numberoftaskquestionsup(e){
        e.preventDefault();
        let companyindex = Array.from(e.target.parentNode.parentNode.parentNode.parentNode.children).indexOf(e.target.parentNode.parentNode.parentNode)-1;
        let lastexperiencearray = this.state.experiencearray.slice();
        lastexperiencearray[companyindex].maintasks = [...lastexperiencearray[companyindex].maintasks, ''];
        this.setState({
            experiencearray: lastexperiencearray,
        });
        this.props.submit(lastexperiencearray);
    }

    render(){
        return(
            <div>
                <form>
                    <fieldset id="experience-fieldset">
                        <legend>Experience Info</legend>
                        {this.state.experiencearray.map(
                            function(object, i){
                            return <div className="experienceSlot" key={`experience ${i}`}>
                                <ul>
                                    <li>
                                        <label htmlFor="position">Your position/job title:</label>
                                        <input type="text" id="position" defaultValue={this.state.experiencearray[i].position} onChange={this.handleChange}></input>
                                    </li>
                                    <li>
                                        <label htmlFor="company">The company: </label>
                                        <input type="text" id="company" value={this.state.experiencearray[i].company} onChange={this.handleChange}></input>
                                    </li>
                                    <li>
                                        <label htmlFor="workdate">Date of working here: </label>
                                        <input type="text" id="workdate" value={this.state.experiencearray[i].workdate} onChange={this.handleChange}></input>
                                    </li>
                                    <li>
                                        <label htmlFor="summary">Date of working here: </label>
                                        <textarea id="summary" value={this.state.experiencearray[i].summary} onChange={this.handleChange}/>
                                    </li>
                                    <label>Tasks: </label>
                                    <ul id="maintasks" className="taskSlot">
                                    {this.state.experiencearray[i].maintasks.map(
                                        function(object, j){
                                        return  <li key={`task ${j}`}>
                                                <label htmlFor="position">Task {j+1}:</label>
                                                <input type="text" id="position" value={this.state.experiencearray[i].maintasks[j]} onChange={this.handleTaskChange}></input>
                                                <button onClick={this.findIndexOfTaskButton}>Delete</button>
                                                </li>
                                        }
                                    ,this)}
                                    <button onClick={this.numberoftaskquestionsup}>Add Other</button>
                                    </ul>
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
export default ExperienceQuestions;