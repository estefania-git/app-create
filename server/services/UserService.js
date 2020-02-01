const { saveUser, getAll, findId } = require("../repositories/userRepository");

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
    console.log("holaa")
    if(id){
        console.log("adios")
    return findId(id)
    .then(userId => userId)
    .catch(error => error)
    } else{
      throw new Error('Not Id')
    }
}


module.exports = {addNewUser, userAll, userId}