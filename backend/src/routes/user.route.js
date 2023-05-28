const {createUser, getUsers, getUserById, updateUserById, deleteUserById} = require("../controllers/user.controller");

const express = require("express");
const router = express.Router();

router.route("/")
  .post(createUser)
  .get(getUsers)

router.route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById)

module.exports = router;