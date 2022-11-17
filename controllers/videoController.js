const VideoModel = require("../model/videoModel");

// list of videos
const getAllvideos = async (req, res) => {
  try {
    const video = await VideoModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// const userPostedAllVideo = async (req, res) => {
//   try {
//     const user_id = req.user._id;

//     const video = await VideoModel.find({ user_id }).sort({ createdAt: -1 });

//     res.status(200).json(video);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

// single video
const getSingleVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await VideoModel.findById(id).sort({ createdAt: -1 });
    if (!video) {
      return res.status(400).json({ error: "No such video." });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// create video
const createVideos = async (req, res) => {
  // req.body
  const { title, description, url, subsription, comments } = req.body;
  try {
    // const user_id = req.user._id;
    const video = await VideoModel.create({
      title,
      description,
      url,
      subsription,
      comments,
      //   user_id,
    });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// update video
const updateVideo = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await VideoModel.findOneAndUpdate(
      { _id: id },
      { ...req.body }
    );
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete video
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await VideoModel.findByIdAndDelete({ _id: id });
    res.status(200).json(video);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllvideos,
  getSingleVideo,
  createVideos,
  updateVideo,
  deleteVideo,
};
