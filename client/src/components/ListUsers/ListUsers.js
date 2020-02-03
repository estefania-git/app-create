import React, { Component } from "react";
import UserService from "../../services/UserService";
import UserPreview from "../UserPreview/UserPreview";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.userService.fetchUsers().then(users => {
      console.log(users);
      this.setState({ users });
    });
  }
  _getAllUsers() {
    return this.state.users.map((user, idx) => (
      <UserPreview key={idx} user={user}></UserPreview>
    ));
  }

  render() {
    if (this.state.users.length > 0) {
      return this._getAllUsers();
    } else return <span>Cargando...</span>;
  }
}

export default ListUsers;
