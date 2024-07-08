

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const studentRouter = require("./routes/students");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/students", studentRouter);

mongoose
  .connect("mongodb://localhost:27017/college-admission", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB:", err));
