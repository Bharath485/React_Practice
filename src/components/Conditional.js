import React, { Component } from 'react'

export default class Conditional extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);    
    this.state = {
       isLoggedIn: true
    }
  }
  handleLoginClick(){
    this.setState({ isLoggedIn: true })
  }
  handleLogoutClick(){
    this.setState({ isLoggedIn: false })
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return (
      <div>
        {isLoggedIn ? <button onClick={this.handleLogoutClick }>Logout</button> : <button onClick={this.handleLoginClick}>LogIn</button>}
        {<Greetings isLoggedIn={isLoggedIn}/>}
      </div>
    )
  }
}
function UserGreeting(props){
  return(
    <div>
      <h1>Welcome To the Page Bharath.</h1>
    </div>
  )
}
function GuestGreeting(props){
  return(
    <div>
      <h1>Please LogIn</h1>
    </div>
  )
}
function Greetings(props){
  const isLoggedIn = props.isLoggedIn;
  if(isLoggedIn){
    return(<UserGreeting/>)
  }
  return(<GuestGreeting/>)
}
