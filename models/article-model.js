const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema(
  {
    titre: { type: String, required: true },
    paragraphe: { type: [String], required: true },
    imgLink: { type: String, required: false },
    auteur: { type: String, required: true },
    pfp: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("articles", Article);
