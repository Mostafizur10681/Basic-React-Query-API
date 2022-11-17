const mongoose = require("mongoose");

// import schema from mongoose
const Schema = mongoose.Schema;

const videosSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
    subsription: {
      type: Number,
      require: true,
    },
    comments: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Video", videosSchema);
