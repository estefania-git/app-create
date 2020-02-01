const User = require("../models/User");

function saveUser(userInfo) {
  const newUser = new User(userInfo);
  return newUser
    .save()
    .then(user => user)
    .catch(err => err);
}

function getAll() {
  return User.find()
    .then(users => users)
    .catch(error => error);
}

function findId(_id) {
  return User.findById(_id)
    .then(userId => userId)
    .catch(error => error);
}

function updateUser(_id, username, birthDate) {
  return User.findByIdAndUpdate(_id, { username, birthDate })
    .then(updateUserId => updateUserId)
    .catch(err => err);
}

function deleteUser(_id) {
  return User.findByIdAndDelete(_id)
    .then(deleteUserId => deleteUserId)
    .catch(err => err);
}

module.exports = { saveUser, getAll, findId, updateUser, deleteUser };
