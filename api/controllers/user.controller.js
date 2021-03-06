const { catchAsync } = require('../utils/catchAsync');

const Users = require('../models/user.model');

const findAllUsers = catchAsync(async (req, res, next) => {
  const users= await Users.findAll();
  return res.status(200).json(users);
});

const findUserById = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const users= await Users.findById(id);
    return res.status(200).json(users);
  });

  const findAllStudentsByUserId = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const students = await Users.findAllByUserId(id);
    return res.status(200).json(students);
  });


module.exports = { findAllUsers, findUserById, findAllStudentsByUserId };
