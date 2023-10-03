import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";

dotenv.config();

const app = express();

app.use(cors({ credentials: true, origin: "*" }));
app.use(cookieParser());
app.use(express.json());

const server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.log("Server listening on port " + process.env.PORT)
);
