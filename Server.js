const express = require("express");
const mongoose = require("mongoose");
const videosRoutes = require("./routes/videoRoutes");
const cors = require("cors");

// port = 5000
const port = process.env.PORT || 5000;

// express app
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route
app.use("/videos", videosRoutes);

// connect with MongoDB
mongoose
  .connect(
    "mongodb+srv://reactquery:VX0RgRjo6XIHnd8e@cluster0.1xyeps4.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, (req, res) => {
      console.log("Listing to port: ", port);
    });
  })
  .catch((error) => {
    console.log(error);
  });
