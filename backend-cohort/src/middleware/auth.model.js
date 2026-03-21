import { required } from "joi";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    minlength: 2,
    maxlength: 50,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    trim: true,

    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    trim: true,

    required: [true, "Password is required"],
    minlength: 8,
    select: false,
  },
  role: {
    type: String,
    enum: ["customer", "seller", "admin"],
    default: "customer",
  },
  isVerified: {
    type: String,
    default: false,
  },
  verificationToken: { type: String, select: false },
});

export default mongoose.model("User", userSchema);
