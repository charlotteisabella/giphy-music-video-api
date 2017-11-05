const express = require('express');
const app = express();
const SubtitlesGrabber = require('./subtitles_grabber');

let videoId = 'dQw4w9WgXcQ'

app.get('/', async function (req, res) {
  console.log(1)
  const subtitles = await SubtitlesGrabber(videoId);
  console.log(2)
  res.json(subtitles);
});

app.listen(8000, function () {
  console.log('Example app listening on port 8000!');
});
