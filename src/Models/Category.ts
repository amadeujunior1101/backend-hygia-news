import mongoose from "../Config/db";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // updated_at: {
  //   type: timeStamp,
  // },
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
