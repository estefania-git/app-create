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


function deleteUser(_id){
return User.findByIdAndDelete(_id)
.then(deleteUserId => deleteUserId)
.catch(err => err);
}


module.exports = { saveUser, getAll, findId, deleteUser };
