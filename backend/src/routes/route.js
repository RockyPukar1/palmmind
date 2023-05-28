const express = require("express");
const app = express();
const userRouter = require("./user.route");

app.use("/user", userRouter);

module.exports = app;
