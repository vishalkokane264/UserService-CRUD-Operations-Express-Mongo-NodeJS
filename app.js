require("dotenv").config();

const express = require("express");
const user_routes = require("./routes/user-route");
const mongoose = require("mongoose");

var app = express();
var PORT = process.env.PORT;

//middleware

app.use(express.json());
//Adding routes
app.use("/api/user", user_routes);

app.use((req, res, next) => {
  console.log(req.method + ":" + req.path);
  next();
});

//connect to Mongo DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connection Successful");
    app.listen(PORT, () => {
      console.log(`Application Running on Port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error(`Error while connecting to mongoDB:${error}`);
  });

module.exports = app;
