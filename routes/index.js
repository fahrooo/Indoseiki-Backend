import express from "express";
import { Login } from "../controller/Auth.js";
import { getUser, postUser, putUser, deleteUser } from "../controller/Users.js";
import { deleteBook, getBook, postBook, putBook } from "../controller/Book.js";

const router = express.Router();

// Auth
router.post("/login", Login);

// Users
router.get("/users", getUser);
router.post("/users/create", postUser);
router.put("/users/update/:id", putUser);
router.delete("/users/delete/:id", deleteUser);

// Book
router.post("/book", getBook);
router.post("/book/create", postBook);
router.put("/book/update/:id", putBook);
router.delete("/book/delete/:id", deleteBook);

export default router;
