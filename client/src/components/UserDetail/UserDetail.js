import React, { Component } from "react";
import UserService from "../../services/UserService";
import { Link } from "react-router-dom";
class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.userService.fetchOneUser(this.props.match.params.id).then(user => {
      this.setState({ user });
    });
  }

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
    if (this.state.user) {
      const { username, birthDate, _id } = this.state.user;
      return (
        <div>
          <h1>{username}</h1>
          <p>{birthDate}</p>
          <Link
            to={{
              pathname: `/edit/${_id}`,
              state: { username, birthDate, _id }
            }}
          >
            Edit
          </Link>
        </div>
      );
    } else return <span>Cargando...</span>;
  }
}

export default UserDetail;
