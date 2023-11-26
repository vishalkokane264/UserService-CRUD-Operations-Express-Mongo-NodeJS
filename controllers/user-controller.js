const Constants = require("../Utils/Constant");
const IResponseStructure = require("../models/response");
const User = require("./../models/user");
const mongoose = require("mongoose");
const response = IResponseStructure;
//get all users

const getUsers = async (req, res) => {
  const users = await User.find({}).sort({ createdAt: -1 });

  response.data = { result: users, count: users.length };
  response.status = Constants.SUCCESS200;
  response.message = Constants.USERS_FETCH_SUCCESSFULLY;
  res.status(Constants.SUCCESS200).json(response);
};

//get single user
const getUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.data = { result: {} };
    response.status = Constants.FAILURE404;
    response.message = Constants.USER_NOT_EXIST;
    res.status(Constants.FAILURE404).json(response);
  }

  const user = await User.findById(id);
  if (!user) {
    response.data = { result: {} };
    response.status = Constants.FAILURE404;
    response.message = Constants.USER_NOT_EXIST;
    res.status(Constants.FAILURE404).json(response);
  }
  response.data = { result: user };
  response.status = Constants.SUCCESS201;
  response.message = Constants.USER_FETCH_SUCCESSFULLY;
  return res.status(Constants.SUCCESS201).json(response);
};

//create new user
const createUser = async (req, res) => {
  const { firstName, lastName, age } = req.body;
  try {
    const user = await User.create({
      age: age,
      firstName: firstName,
      lastName: lastName,
    });
    response.data = { result: user };
    response.status = Constants.SUCCESS200;
    response.message = Constants.USER_CREATE_SUCCESSFULLY;
    return res.status(Constants.SUCCESS200).json(response);
  } catch (error) {
    console.log(error);
    response.data = { result: { error } };
    response.status = Constants.FAILURE400;
    response.message = Constants.USER_CREATE_FAILURE;
    res.status(Constants.FAILURE400).json(response);
  }
};

//delete user by id

const deleteUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.data = { result: {} };
    response.status = Constants.FAILURE404;
    response.message = Constants.USER_DELETE_FAILURE;
    res.status(Constants.FAILURE404).json(response);
  }
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    response.data = { result: {} };
    response.status = Constants.FAILURE400;
    response.message = Constants.USER_DELETE_FAILURE;
    res.status(Constants.FAILURE400).json(response);
  }
  response.data = { result: user };
  response.status = Constants.SUCCESS200;
  response.message = Constants.USER_DELETE_SUCCESSFULLY;
  return res.status(Constants.SUCCESS200).json(response);
};

//delete users

const deleteUsers = async (req, res) => {
  const user = await User.deleteMany({});
  response.data = { result: user };
  response.status = Constants.SUCCESS200;
  response.message = Constants.USER_DELETE_SUCCESSFULLY;
  return res.status(Constants.SUCCESS200).json(response);
};

//update user

const UpdateUser = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.data = { result: {} };
    response.status = Constants.FAILURE404;
    response.message = Constants.USER_UPDATE_FAILURE_FAILURE;
    res.status(Constants.FAILURE404).json(response);
  }

  const { firstName, lastName, age } = req.body;
  try {
    const user = await User.findByIdAndUpdate(id, {
      age: age,
      firstName: firstName,
      lastName: lastName,
    });
    response.data = { result: user };
    response.status = Constants.SUCCESS200;
    response.message = Constants.USER_UPDATE_SUCCESSFULLY;
    return res.status(Constants.SUCCESS200).json(response);
  } catch (error) {
    console.log(error);
    response.data = { result: { error } };
    response.status = Constants.FAILURE400;
    response.message = Constants.USER_UPDATE_FAILURE;
    res.status(Constants.FAILURE400).json(response);
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  deleteUsers,
  UpdateUser,
};
