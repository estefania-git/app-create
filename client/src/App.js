import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import UserService from "./services/UserService";
import "bootstrap/dist/css/bootstrap.min.css";
import NewUser from '../src/components/NewUser/NewUser'
class App extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      user:{
        username: '',
        birthDate: new Date()
      }
    };
  }

handleChange = (e) => {
  const {name, value } = e.target;
  this.setState({... this.state, [name]: value })
}

handleSubmit = (e) => {
  const {username, birthDate } = this.state;
  e.preventDefault();
  this.userService.createUser({username, birthDate})
  .then(
    () => {
      this.setState({...this.state, username: '', birthDate: new Date()})
      this.updateUser()
    }
  )
}
  setUser = user => {
    this.setState({ ...this.state, user });
   
  };

  fetchUser = () => {
    if (this.state.user === null) {
      this.userService
        .fetchUsers()
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

 
  componentDidMount = () => {
    this.fetchUser();
    
  };

  render() {
    const { username, birthDate } = this.state;

    return (
      <div>
        <h1>Hello Users</h1>
        {this.state.user ? <h1>{this.state.user.username}</h1> : null}
      </div>
    );
  }
} 
export default App;
