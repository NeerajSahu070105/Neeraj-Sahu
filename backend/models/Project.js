const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    link: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
