const User = require('../models/user.model');

class UserController {
  createUser = async (req, res, next) => {
    const {email} = req.body;
    try {
      const findUser = await User.findOne({email});
      if (!findUser) {
        const newUser = await User.create(req.body);
        res.json(newUser);
      } else {
        res.status(409).json({
          message: "User already exists"
        })
      }
    } catch (error) {
      next(error);
    }
  }

  getUsers = async (req, res, next) => {
    try {
      const allUsers = await User.find();
      res.json(allUsers);
    } catch (error) {
      next(error);
    }
  }

  getUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      } else {
        res.json(user);
      }
    } catch (error) {
      next(error);
    }
  }

  updateUserById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, {
        new: true
      });
      if (!updatedUser) {
        res.status(404).json({
          message: "User not found"
        });
      } else {
        res.json(updatedUser);
      }
    } catch (error) {
      next(error);
    }
  }

  deleteUserById = async (req, res, next) => {
    const {id} = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        res.status(404).json({
          message: "User not found"
        })
      } else {
        res.json({
          message: "User deleted successfully"
        })
      }
    } catch (error) {
      next(error);
    }
  }
}

const userCtrl = new UserController();

module.exports = userCtrl;