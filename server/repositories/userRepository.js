const User = require("../models/User");


function saveUser(userInfo) {
    const newUser = new User(userInfo);

         return newUser.save()
        .then(user => user)
        .catch(err => err)
}

function getAll(){
   
   return User.find()
    .then(users => users)
    .catch(error => error)

}

function findId(_id){
    
      
    return User.findById(_id)
    .then(userId => userId)
    .catch(error => error)
}



module.exports = { saveUser, getAll, findId };
