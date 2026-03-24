const { pipeline } = require("@xenova/transformers");

let embedder;

const loadModel = async () => {
  if (!embedder) {
    embedder = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2");
  }
};

const generateEmbeddings = async (chunks) => {
  await loadModel();

  const embeddings = [];

  for (const chunk of chunks) {
    const output = await embedder(chunk, { pooling: "mean", normalize: true });

    embeddings.push({
      text: chunk,
      embedding: Array.from(output.data),
    });
  }

  return embeddings;
};

module.exports = generateEmbeddings;