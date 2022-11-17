const express = require("express");

const {
  getAllvideos,
  createVideos,
  updateVideo,
  deleteVideo,
  getSingleVideo,
} = require("../controllers/videoController");

const VideoModel = require("../model/videoModel");

// express app

const router = express();

// get all videos
router.get("/", getAllvideos);

// get single video
router.get("/:id", getSingleVideo);

// create new videos
router.post("/", createVideos);

// update video
router.patch("/:id", updateVideo);

// delete video
router.delete("/:id", deleteVideo);

// export router
module.exports = router;
