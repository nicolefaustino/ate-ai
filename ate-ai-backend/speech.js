const express = require("express");
const fs = require("fs");
const multer = require("multer");
const speech = require("@google-cloud/speech");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");
const path = require("path");

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const router = express.Router();
const upload = multer({ dest: "uploads/" });

const client = new speech.SpeechClient({
  keyFilename: "google-creds.json",
});

router.post("/speech-to-text", upload.single("audio"), async (req, res) => {
  const inputFile = req.file.path;
  const outputFile = path.join("uploads", `${req.file.filename}.wav`);

  try {
    await new Promise((resolve, reject) => {
      ffmpeg(inputFile)
        .outputOptions(["-ar 16000", "-ac 1", "-f wav"])
        .on("end", resolve)
        .on("error", reject)
        .save(outputFile);
    });

    const audioBytes = fs.readFileSync(outputFile).toString("base64");

    const request = {
      audio: { content: audioBytes },
      config: {
        encoding: "LINEAR16",
        sampleRateHertz: 16000,
        languageCode: "fil-PH",
      },
    };

    const [response] = await client.recognize(request);
    const transcript = response.results
      .map((r) => r.alternatives[0].transcript)
      .join("\n");
    res.json({ transcript });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Speech recognition failed" });
  } finally {
    // Clean up both files
    if (fs.existsSync(inputFile)) fs.unlinkSync(inputFile);
    if (fs.existsSync(outputFile)) fs.unlinkSync(outputFile);
  }
});

module.exports = router;
