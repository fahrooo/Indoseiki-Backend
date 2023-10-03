import express from "express";
import { Login } from "../controller/Auth.js";
import { getUser, postUser, putUser, deleteUser } from "../controller/Users.js";

const router = express.Router();

// Auth
router.post("/login", Login);

// Users
router.get("/users", getUser);
router.post("/users/create", postUser);
router.put("/users/update/:id", putUser);
router.delete("/users/delete/:id", deleteUser);

export default router;
