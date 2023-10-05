import express from "express";
import { Login } from "../controller/Auth.js";
import { getUser, postUser, putUser, deleteUser } from "../controller/Users.js";
import { deleteBook, getBook, postBook, putBook } from "../controller/Book.js";
import {
  deleteHistory,
  getHistory,
  postHistory,
  putHistory,
} from "../controller/History.js";
import { getImage, uploudImage } from "../controller/Uploud.js";
import { upload } from "../upload.js";

const router = express.Router();

// Auth
router.post("/login", Login);

// Users
router.get("/users", getUser);
router.post("/users/create", postUser);
router.put("/users/update/:id", putUser);
router.delete("/users/delete/:id", deleteUser);

// Book
router.get("/book", getBook);
router.post("/book/create", postBook);
router.put("/book/update/:id", putBook);
router.delete("/book/delete/:id", deleteBook);

// History
router.get("/history", getHistory);
router.post("/history/create", postHistory);
router.put("/history/update/:id", putHistory);
router.delete("/history/delete/:id", deleteHistory);

// Get & Uploud Image
router.get("/images/:image", getImage);
router.post("/upload", upload.single("file"), uploudImage);

export default router;
