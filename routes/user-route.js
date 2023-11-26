var express = require("express");
var router = express.Router();
const UserModel = require("../models/user");
const {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  deleteUsers,
  UpdateUser,
} = require("./../controllers/user-controller");
//Creating CRUD Operations

//POST new USER
router.post("/", createUser);

//GET all USER
router.get("/", getUsers);

//GET single USER
router.get("/:id", getUser);

//PATCH USER
router.patch("/:id", UpdateUser);

//DELETE All USER
router.delete("/", deleteUsers);

//DELETE USER
router.delete("/:id", deleteUser);

module.exports = router;
