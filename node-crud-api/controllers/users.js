import User from "../models/user.js";

// CRUD Controllers

// get all users
const getUsers = async (req, res, next) => {
  try {
    const allUsers = await User.findAll();
    res.status(200).json({ users: allUsers });
  } catch (err) {
    console.log(err);
  }
};

// get user by id
const getUserId = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const reqUser = await User.findByPk(userId);
    if (!reqUser) {
      return res.status(404).json({ message: "User not found!" });
    }
    res.status(200).json({ user: reqUser });
  } catch (err) {
    console.log(err);
  }
};

// create user
const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    const result = await User.create({ name: name, email: email });
    console.log("Create User");
    res
      .status(201)
      .json({ message: "User created successfully!", user: result });
  } catch (err) {
    console.log(err);
  }
};

// update user
const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const updatedName = req.body.name;
    const updatedEmail = req.body.email;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    user.name = updatedName;
    user.email = updatedEmail;
    const result = await user.save();
    res.status(200).json({ message: "User Updated!", user: result });
  } catch (err) {
    console.log(err);
  }
};

// delete user
const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    const result = await User.destroy({
      where: {
        id: userId,
      },
    });
    res.status(200).json({ message: "User deleted!" });
  } catch (err) {
    console.log(err);
  }
};

export { getUsers, getUserId, createUser, updateUser, deleteUser };
