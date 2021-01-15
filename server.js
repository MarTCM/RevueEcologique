const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");
const articleRouter = require("./routes/article-router");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client", "build")));

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(`/${process.env.REACT_APP_AUTH0_CLIENT_SECRET}/api`, articleRouter);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
