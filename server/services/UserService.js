const {
  saveUser,
  getAll,
  findId,
  updateUser,
  deleteUser
} = require("../repositories/userRepository");

function addNewUser(userInfo) {
  console.log(userInfo);
  if (userInfo && userInfo.username && userInfo.date) {
    return saveUser(userInfo)
      .then(save => save)
      .catch(err => err);
  } else {
    throw new Error("ERROR");
  }
}

function userAll() {
  return getAll()
    .then(allUsers => allUsers)
    .catch(error => error);
}

function userId(id) {
  if (id) {
    return findId(id)
      .then(userId => userId)
      .catch(error => error);
  } else {
    throw new Error("Not Id");
  }
}

function userUpdate(id, userInfo) {
  if (userInfo && userInfo.username && userInfo.birthDate) {
    const { username, birthDate } = userInfo;
    return updateUser(id, username, birthDate)
      .then(updateUserId => {
        console.log("user successfully updated");
        return updateUserId;
      })
      .catch(err => err);
  } else {
    throw new Error("Not Fields");
  }
}

function userDelete(id) {
  return deleteUser(id)
    .then(deleteUserId => deleteUserId)
    .catch(err => err);
}

module.exports = { addNewUser, userAll, userId, userUpdate, userDelete };
