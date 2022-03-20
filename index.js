const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/youtube", (req, res) => {
  const { url } = req.body;
  console.log(url);
  ytdl(url).pipe(fs.createWriteStream("video.mp4"));
  res.json({
    status: "Ok",
  });
});

app.listen(PORT, () => {
  console.log(`Server started running at PORT ${PORT}`);
});
