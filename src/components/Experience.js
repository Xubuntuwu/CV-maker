// import React from "react";
// class Experience extends React.Component{
//     constructor(props){
//         super();
//     }
//     generateKey = (pre) => {
//         return `${pre}${new Date().getTime() }`;
//     }
//     render(){
//         return(
//             <div id="Experience">
//                 <h3>Experience</h3>
//                 {this.props.educationarray.map(function(object, i){
//                     return <div key={this.generateKey(i)}>
//                     <ul>
//                         <li>{this.props.educationarray[i].degree}</li>
//                         <li>{this.props.educationarray[i].school}</li>
//                         <li>{this.props.educationarray[i].schooldate}</li>
//                     </ul>
//                 </div>
//                 }, this)}
//             </div>
//         );
//     }
// }

// export default Experience;