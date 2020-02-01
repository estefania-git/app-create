const {
  saveUser,
  getAll,
  findId,
  deleteUser
} = require("../repositories/userRepository");

function addNewUser(userInfo){
    console.log(userInfo)
    if (userInfo && userInfo.username && userInfo.birthDate){
     return saveUser(userInfo)
    .then(save => save)
    .catch(err => err)
    }
    else{
     throw new Error('ERROR')
    }
    
}

function userAll(){
return getAll()
.then(allUsers => allUsers)
.catch(error => error)
}

function userId(id){
    if(id){
return findId(id)
    .then(userId => userId)
    .catch(error => error)
    } else{
      throw new Error('Not Id')
    }
}

function userDelete(id){
    return deleteUser(id)
    .then(deleteUserId => deleteUserId)
    .catch(err => err)
}


module.exports = {addNewUser, userAll, userId, userDelete}