import mongoose from "../Config/db";

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  visibility: {
    type: String,
    required: true,
  },
  imageNameUUID: {
    type: String,
    required: false,
  },
  imageNameReal: {
    type: String,
    required: false,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
//   updated_at: {
//     type: timeStamp,
//   },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
