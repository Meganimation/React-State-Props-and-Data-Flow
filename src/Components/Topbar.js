import React, { Component } from "react";

export default class Topbar extends Component {

state = {
  name: "",
  bio: "",
  img_url: ""
}

handleName=(e)=>{
console.log(e.target.value)
this.setState({
  name: e.target.value
})
}

handleBio=(e)=>{
  console.log(e.target.value)
  this.setState({
    bio: e.target.value
  })
}

handleImg=(e)=>{
  console.log(e.target.value)
  this.setState({
    img_url: e.target.value
  })
}


  render() {
    return (
      <div className="top-bar">
        <h1 className="top-bar-title">{this.props.name}</h1>
        <h2>Add someone that inspires you!?</h2>
        <form>
          <input onChange={this.handleName} name="name" type="text" placeholder="Name" event={this.state.name} />
          <input onChange={this.handleBio} name="bio" type="text" placeholder="Bio" event={this.state.bio} />
          <input onChange={this.handleImg} name="img_url" type="text" placeholder="Img Url" event={this.state.img_url} />
          <input onClick={(e)=>this.props.handleSubmit(e, this.state)} type="submit" />
        </form>
      </div>
    );
  }
}
