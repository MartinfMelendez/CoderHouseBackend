import express from "express";
import "dotenv/config";
import dbConnection from "./src/utils/db.js";

const app = express();

const PORT = 8080;
const ready = () => {
  console.log("Server is ready on port " + PORT);
  dbConnection();
};

app.listen(PORT, ready);
