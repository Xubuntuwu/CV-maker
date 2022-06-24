import './App.css';
import React from "react";
import ContactQuestions from "./components/ContactQuestions";
import Contact from "./components/Contact";
import EducationQuestions from './components/EducationQuestions';
import Education from './components/Education';
import ExperienceQuestions from './components/ExperienceQuestions';
import Experience from './components/Experience';
import LanguageQuestions from './components/LanguageQuestions';
import Language from './components/Language';
import SkillsQuestions from './components/SkillsQuestions';
import Skills from './components/Skills';
import Basic from './components/Basic';
import BasicQuestions from './components/BasicQuestions';
import ProfileQuestions from './components/ProfileQuestions';
import Profile from './components/Profile';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      phone:'',
      mail:'', 
      location:'', 
      linkedin:'',
      educationarray: [{degree:'', school:'', schooldate:''}],
      experiencearray: [{position:'', company:'', workdate:'', summary:'',maintasks:['']}],
      languagearray: [{language: '', proficiency: ''}],
      skillarray: [''],
      name: '',
      title: '',
      profile: '',
    }
    this.changeContact = this.changeContact.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.changeExperience= this.changeExperience.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeSkill = this.changeSkill.bind(this);
    this.changeBasic = this.changeBasic.bind(this);
    this.changeProfile = this.changeProfile.bind(this);
  }

  changeContact(phone, mail, location, linkedin){
    this.setState({
      phone: phone,
      mail: mail,
      location: location,
      linkedin: linkedin,
    });
  }
  changeEducation(neweducationarray){
    this.setState({
      educationarray: neweducationarray,
    });
  }
  changeExperience(newexperiencearray){
    this.setState({
      experiencearray: newexperiencearray,
    });
  }
  changeLanguage(newlanguagearray){
    this.setState({
      languagearray: newlanguagearray,
    });
  }
  changeSkill(newskill){
    this.setState({
      skillarray: newskill,
    });
  }
  changeBasic(newname, newtitle){
    this.setState({
      name: newname,
      title: newtitle,
    });
  }
  changeProfile(newprofile){
    this.setState({
      profile: newprofile,
    });
  }

  render(){
    return (
      <div className="App">
        <div className="Questions">
        <BasicQuestions submit={this.changeBasic} name={this.state.name} title={this.state.title}/>
        <ProfileQuestions submit={this.changeProfile} profile={this.state.profile}/>
        <ContactQuestions submit={this.changeContact} phone={this.state.phone} mail={this.state.mail} location={this.state.location} linkedin={this.state.linkedin}/>
        {/* <Contact phone={this.state.phone} mail={this.state.mail} location={this.state.location} linkedin={this.state.linkedin}/> */}
        <EducationQuestions educationarray={this.state.educationarray} submit={this.changeEducation}/>
        {/* <Education educationarray={this.state.educationarray}/> */}
        <ExperienceQuestions experiencearray={this.state.experiencearray} submit={this.changeExperience}/>
        {/* <Experience experiencearray={this.state.experiencearray}/> */}
        <LanguageQuestions languagearray={this.state.languagearray} submit={this.changeLanguage}/>
        {/* <Language languagearray={this.state.languagearray}/> */}
        <SkillsQuestions skillarray={this.state.skillarray} submit={this.changeSkill}/>
        {/* <Skills skillarray={this.state.skillarray}/> */}
        </div>
        <div className="CV">
        <Basic name={this.state.name} title={this.state.title}/>
        <div id='leftcolumn'>
        <Contact phone={this.state.phone} mail={this.state.mail} location={this.state.location} linkedin={this.state.linkedin}/>
        <Education educationarray={this.state.educationarray}/>
        <Language languagearray={this.state.languagearray}/>
        <Skills skillarray={this.state.skillarray}/>
        </div>
        <div id='rightcolumn'>
        <Profile profile={this.state.profile}/>
        <Experience experiencearray={this.state.experiencearray}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;