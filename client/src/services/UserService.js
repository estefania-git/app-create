import axios from "axios";

class UserService {
  constructor() {
    this.instance = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/users`,
      withCredentials: true
    });
  }

  fetchUsers = () => {
    return this.instance
      .get("/all")
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error));
  };

  fetchOneUser = id => {
    return this.instance
      .get(`/${id}`)
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error));
  };

  createUser = (username, birthDate) => {
    return this.instance
      .post("/new", username, birthDate)
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error));
  };

  updateUser = (id, username, birthDate) => {
    return this.instance
      .put(`/update/${id}`, { username, birthDate })
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error));
  };

  deleteUser = id => {
    return this.instance
      .delete(`/delete/${id}`)
      .then(res => Promise.resolve(res.data))
      .catch(error => console.error(error));
  };
}

export default UserService;
