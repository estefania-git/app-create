import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserService from './services/UserService';


class App extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    state = {
      user: null,
    
    };
  }}
  
setUser = user => {
  this.setState({ ...this.state, user });
};

fetchUser = () => {
  if (this.state.user === null) {
    this.authService
      .then(
        user => {
          this.setUser(user);
        },
        error => {
          this.setUser(false);
        }
      )
      .catch(() => {
        this.setUser(false);
      });
  }
};
componentDidMount() {
  this.fetchUser();
}
  
render (){
  const { user } = this.state;
   
    return (
      <div>
      <h1>{this.state.user.username}</h1>
      
        
          
      </div>
    );
    } 


export default App;
