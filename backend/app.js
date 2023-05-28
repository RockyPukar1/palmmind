const express = require("express");
const bodyParser = require("body-parser");
const connectToMongo = require("./src/config/dbConnect");
const app = express();
const cors = require("cors")
const routes = require("./src/routes/route")

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

connectToMongo();
app.use("/api/v1", routes)

const port = 9000;
app.listen(port, "localhost", () => {
  console.log("Server started on port " + port);
});
