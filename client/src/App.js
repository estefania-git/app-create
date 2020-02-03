import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ListUsers from "./components/ListUsers/ListUsers";
import UserDetail from "./components/UserDetail/UserDetail";
import NewUser from "./components/NewUser/NewUser";
import EditUser from "./components/EditUser/EditUser";
import { Link } from "react-router-dom";


class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link to={`/new`}>Create a New User</Link>
        <Switch>
          <Route exact path="/" render={() => <ListUsers></ListUsers>} />
          <Route
            exact
            path="/new"
            render={() => (
              <NewUser>
                <button>Create User</button>
              </NewUser>
            )}
          />
          <Route
            exact
            path="/edit/:id"
            render={props => <EditUser {...props}></EditUser>}
          />
          <Route
            exact
            path="/:id"
            render={props => <UserDetail {...props}></UserDetail>}
          />
        </Switch>
      </div>
    );
  }
}
export default App;
