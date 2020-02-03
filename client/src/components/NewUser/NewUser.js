import React, { Component } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

class NewUser extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {};
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };

  createUser = e => {
    e.preventDefault();
    const { username, birthDate } = this.state;
    const date = new Date(birthDate);
 
    this.userService
      .createUser({ username, date })
      .then(userCreated => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Link to={`/`}>Home</Link>
        <form>
          <label htmlFor="username">New User:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="BirthDate">Please set the BirthDate:</label>
          <input
            type="date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.handleChange}
          />
          <button onClick={this.createUser}>Create New User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
