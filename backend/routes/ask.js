const express = require("express");
const generateEmbeddings = require("../utils/embedder");
const cosineSimilarity = require("../utils/similarity");
const { getEmbeddings } = require("../store");
const generateAnswer = require("../utils/gemini");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { question } = req.body;

    const stored = getEmbeddings();

    if (!stored.length) {
      return res.status(400).json({ message: "No document uploaded" });
    }

    // embed question
    const [queryEmbedding] = await generateEmbeddings([question]);

    // compute similarity
    const scored = stored.map((item) => ({
      text: item.text,
      score: cosineSimilarity(queryEmbedding.embedding, item.embedding),
    }));

    // sort top matches
    const topChunks = scored
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((item) => item.text)
      .join("\n");

    // Gemini answer
    const answer = await generateAnswer(question, topChunks);

    res.json({ answer });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error answering question" });
  }
});

module.exports = router;