const express = require("express");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const listRoute = require("./routes/list");
const cors = require("cors");
const bodyParser = require("body-parser");

// const port = process.env.PORT || 8080;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);
app.use((req, res, next) => {
  res.status(404).json({
    message: "Bad Request",
  });
});

// app.listen(port, () => {
//   console.log("Backend is running");
// });

module.exports = app;
