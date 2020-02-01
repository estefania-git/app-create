const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true
  },

  birthDate: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", userSchema);
module.exports = User;
