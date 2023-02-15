import express from "express";
import {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.js";

const router = express.Router();

// CRUD Routes/users

router.get("/", getUsers); // /users
router.get("/:userId", getUserId); // /users/:userId
router.post("/", createUser); // /users
router.put("/:userId", updateUser); // /users/:userId
router.delete("/:userId", deleteUser); // /users/:userId

export default router;
