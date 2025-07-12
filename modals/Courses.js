import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  duration: {
    type: Number,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  createdBy: {
    type: String,
    required: true,
  },

  createdAt: {
    type: String,
    default: Date.now,
  },
});

export const Courses = mongoose.model("Courses", Schema);
