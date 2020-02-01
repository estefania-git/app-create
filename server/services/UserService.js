const { saveUser, getAll, finId } = require("../repositories/userRepository");

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

function userId(){
    return finId()
    .then(userId => userId)
    .catch(error => error)
}


module.exports = {addNewUser, userAll, userId}