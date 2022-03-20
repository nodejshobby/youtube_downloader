const express = require("express");
const ytdl = require("ytdl-core");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/youtube", (req, res) => {
  const { url } = req.query;

  res.header("Content-Disposition", 'attachment; filename="youtube_video.mp4');

  ytdl(url, {
    format: "mp4",
  }).pipe(res);
});

app.listen(PORT, () => {
  console.log(`Server started running at PORT ${PORT}`);
});
