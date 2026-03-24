const express = require("express");
const multer = require("multer");
const path = require("path");
const chunkText = require("../utils/chunker");
const extractTextFromPDF = require("../utils/pdfParser");
const generateEmbeddings = require("../utils/embedder");
const { setEmbeddings } = require("../store");
const router = express.Router();

// storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const filePath = path.join(__dirname, "..", "uploads", req.file.filename);

    // 🔥 Extract text
    const text = await extractTextFromPDF(filePath);

    const chunks = chunkText(text);

    const embeddings = await generateEmbeddings(chunks);
setEmbeddings(embeddings);

console.log("Stored embeddings:", embeddings.length);

    res.json({
    message: "File processed & embeddings created",
    totalChunks: chunks.length,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error processing PDF" });
  }
});

module.exports = router;