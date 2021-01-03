const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const articleRouter = require("./routes/article-router");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", articleRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 8000, () =>
  console.log(`Server running on port ${process.env.PORT || 8000}`)
);
