const express = require("express");
const router = express.Router();
const { addNewUser, userAll, userId } = require("../services/UserService");

/* GET users listing. */
router.get("/all", function(req, res, next) {
  userAll()
    .then(allUsers => res.status(200).send(allUsers))
    .catch(error => res.status(400));
});

router.get("/id", function(req, res, next) {
 userId()
});

router.post("/new", function(req, res, next) {
  addNewUser(req.body)
  .then(user => res.status(200).send(user))
  .catch(error => res.status(400))
});

router.put("/update/:id", function(req, res, next) {
  res.send("respond with a resource");
});

router.delete("/delete/:id", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
