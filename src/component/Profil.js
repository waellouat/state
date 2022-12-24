import React, { Component } from "react" ;
 export default class Persone extends React.Component {
 constructor (Persone) {
    super(Persone) ;
    
this.state = {
FullName :"  wael louati" ,
Bio : "yes we can" ,
imageSrc :"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.simplilearn.com%2Fimage-processing-article&psig=AOvVaw1PBJpQjlzHB29EAaQxjTrW&ust=1671980509728000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOjCt_fCkvwCFQAAAAAdAAAAABAE" ,
Profesion :"i am a developer" ,

} 
 }
 

render() {
return(
    <div className="profil">
        <h1>my name is : {this.state.FullName} </h1>
        <h2>Bio : {this.state.Bio} </h2>
        <img src= {this.state.image} alt="me"></img>
        <h2>my Profesion : {this.state.Profesion} </h2>
        
    </div>
)

}
};

