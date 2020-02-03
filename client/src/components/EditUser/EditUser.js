import React, { Component } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {};
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { username, birthDate, _id } = this.props.location.state;
      this.setState({
        ...this.state,
        username,
        birthDate,
        _id
      });
    }
  }


  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
  };


  updateUser = e => {
    e.preventDefault();
    const { username, birthDate, _id } = this.state;
    this.userService
      .updateUser(_id, username, birthDate)
      .then(userUpdated => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };

  
  removeUser = e => {
    e.preventDefault();
    const { _id } = this.state;
    this.userService
      .deleteUser(_id)
      .then(deleteUser => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  };
  

  render() {
    return (
      <div>
        <form>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="BirthDate">BirthDate</label>
          <input
            type="date"
            name="birthDate"
            value={this.state.birthDate}
            onChange={this.handleChange}
          />
          <button onClick={this.updateUser}>Update User</button>
          <button onClick={this.removeUser}>Remove User</button>
        </form>
      </div>
    );
  }
}

export default EditUser;
