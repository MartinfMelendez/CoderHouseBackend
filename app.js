import express from "express";

const app = express();

const PORT = 8080;
const ready = console.log("Server is ready on port " + PORT);

app.listen(PORT, ready);
