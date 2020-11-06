import mongoose from "../Config/db";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 100,
  },
  password: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // updated_at: {
  //   type: timeStamp,
  // },
});

const User = mongoose.model("User", userSchema);

export default User;
