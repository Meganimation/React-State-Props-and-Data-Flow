import React, { Component, Fragment } from "react";
import "./Stylesheets/style.scss";
import Topbar from './Components/Topbar'
import ShowPanel from './Components/ShowPanel' 
import Sidebar from './Components/Sidebar'

export default class App extends Component {

  state = {
    person: [],
    displayedPerson: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/people')
    .then(r => r.json())
    .then(data => this.setState({
      person: data,
      displayedPerson: data
    }))
  }


  handleSubmit=(e, newPerson)=>{
  
    e.preventDefault()
  this.setState({
    person: [...this.state.person, newPerson],
    displayedPerson: [...this.state.displayedPerson, newPerson],
    onePerson: []
  })
  }

  erasePerson=(e, delPerson)=>{
e.preventDefault()

console.log(delPerson)

this.setState({
  onePerson: []
})


  }

  showShowPanel=(e, person)=>{
    e.preventDefault()
    console.log(person)
this.setState({
onePerson: person
})

  }





  render() {
    // const allPeople = this.state.person.map((person)=>{
    //  return <Sidebar person={person} key={person.id} showShowPanel={this.showShowPanel}/>
    // })

 return <Fragment>
         <Topbar handleSubmit={this.handleSubmit}/>
         <Sidebar person={this.state.person} showShowPanel={this.showShowPanel}/>
         <ShowPanel person={this.state.onePerson} erasePerson={this.erasePerson} />

     </Fragment>;
  }
}
