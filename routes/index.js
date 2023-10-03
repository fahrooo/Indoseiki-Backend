import express from "express";
import { Login } from "../controller/Auth.js";

const router = express.Router();

// Auth
router.post("/login", Login);

export default router;
