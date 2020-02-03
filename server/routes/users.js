const express = require("express");
const router = express.Router();
const {
  addNewUser,
  userAll,
  userId,
  userUpdate,
  userDelete
} = require("../services/UserService");

/* GET users listing. */
router.get("/all", function(req, res, next) {
  userAll()
    .then(allUsers => res.status(200).send(allUsers).json)
    .catch(error => res.status(400));
});

router.get("/:id", function(req, res, next) {
  userId(req.params.id)
    .then(uId => res.status(200).send(uId))
    .catch(error => res.status(400));
});

router.post("/new", function(req, res, next) {
  addNewUser(req.body)
    .then(user => res.status(200).send(user).json)
    .catch(error => res.status(400));
});

router.put("/update/:id", function(req, res, next) {
  userUpdate(req.params.id, req.body)
    .then(updateU => res.status(200).send(updateU))
    .catch(error => res.status(400));
});

router.delete("/delete/:id", function(req, res, next) {
  userDelete(req.params.id)
    .then(deleteU => res.status(200).send(deleteU))
    .catch(error => res.status(400));
});

module.exports = router;
